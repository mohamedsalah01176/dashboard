import React from 'react'
import ChartPie from '../ChartPie/ChartPie'
import ChartBar from "../ChartBar/ChartBar"
import ChartGoe from '../Chartgeo/ChartGoe'

export default function Row4() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-2 my-7'>
        <div className='h-[300px] min-w-[200px] rounded-lg bg-slate-700 text-white flex-grow' ><ChartPie isDashboard={true}/></div>
        <div className='h-[300px] min-w-[240px] rounded-lg bg-slate-700 text-white flex-grow'><ChartBar isDashboard={true}/></div>
        <div className='h-[300px] min-w-[200px] rounded-2xl bg-slate-700 text-white flex-grow'><ChartGoe isDashboard={true}/></div>
        
    </div>
)
}
