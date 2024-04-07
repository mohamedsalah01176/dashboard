import React from 'react'
import Card from './Card'
import { Message } from '@mui/icons-material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { data1, data2, data3 ,data4} from './data'


export default function Row2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-3  '>
        <Card icon={<Message/>} text1={"4,000"} text2={"Mohamed Salah"} data={data1} subtitle={"+14"} scheme={"category10"}/>
        <Card icon={<PersonAddAltIcon/>} text1={"3,200"} text2={"Ahmed Salah"} data={data2} subtitle={"+51"} scheme={"nivo"}/>
        <Card icon={<AssignmentTurnedInIcon/>} text1={"5,200"} text2={"Kahled Salah"} data={data3} subtitle={"+21"} scheme={"accent"}/>
        <Card icon={<AssessmentIcon/>} text1={"1,200"} text2={"Nade Salah"} data={data4} subtitle={"+71"} scheme={"pastel2"}/>
        
    </div>
  )
}
