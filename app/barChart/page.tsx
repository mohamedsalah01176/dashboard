"use client"
import React from 'react'
import ChartBar from "../Component/ChartBar/ChartBar"
import Cookies from 'universal-cookie'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'



export default function page() {
  const cookies=new Cookies()
  const dataCookies=cookies.get("datauser")
  const themeFromMui=useTheme()
  return (
    <div className='mt-[80px] ml-[150px] p-3 h-[90vh]' style={{background:themeFromMui.palette.background.default}}>
     {useMediaQuery('(max-width:1050px)')?
    <h1 className=' flex justify-center items-center text-3xl h-[80vh] text-white'>open in large Screen to  view the Contant</h1>
    :
    <>
    {dataCookies?
       <ChartBar isDashboard={false}/>
    :
    <div className="text-3xl flex justify-center h-[80vh] items-center text-white" >please go to register page and create email</div>

    }
    </>
    }
    </div>
  )
}
