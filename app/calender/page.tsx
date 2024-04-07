"use client"
import React, { useEffect, useState } from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import "./index.css"
import { colors, useMediaQuery, useTheme } from '@mui/material'
import Cookies from 'universal-cookie'

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}


function renderEventContent(eventContent: EventContentArg) {
 
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}


export default function page() {
  const [weekendsVisible, setweekendsVisible] = useState <any>(true)
  const [currentEvents, setcurrentEvents] = useState<any>([])

  const theme=useTheme()

  const handleWeekendsToggle = () => {
    
    setweekendsVisible(!weekendsVisible)
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setcurrentEvents(events)
    
  }

  const cookies=new Cookies()
  const dataCookies=cookies.get("datauser")
    const [isClient,setIsClient]=useState(false)



useEffect(()=>{
  setIsClient(true)
})

  return (
    <div className=' mt-[80px] ml-[150px] ' style={{background:theme.palette.mode==="light"?theme.palette.common.white: theme.palette.common.black,color:theme.palette.mode==="light"?theme.palette.common.black: theme.palette.common.white}}>
      {useMediaQuery('(max-width:920px)')?
      <h1 className=' flex justify-center items-center text-3xl h-[80vh]'>open in large Screen to  view the Contant</h1>
      :
      <>
      {dataCookies && isClient == true?
        <div className='  demo-app'>
          <div className='demo-app-sidebar'>
            
            <div className='demo-app-sidebar-section'>
              <h2>All Events ({currentEvents.length})</h2>
              <ul>
                {currentEvents.map(renderSidebarEvent)}
              </ul>
            </div>
          </div>

            <div className='demo-app-main z-0'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
              />
            </div>
        </div>
      :
      <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>
    }
      </>
      }
      </div>
    

    
  )
}