"use client"
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material';
import Cookies from 'universal-cookie';
// import { data } from '../Component/chartbar/data';

export default function page() {
    const [open1,setOpen1]=useState<boolean>(false)
    const [open2,setOpen2]=useState<boolean>(false)
    const [open3,setOpen3]=useState<boolean>(false)


  const cookies=new Cookies()
  const dataCookies=cookies.get("datauser")
  const [isClient,setIsClient]=useState(false)

  const themeFromMui=useTheme()
  return (
    
    <div className="mt-[80px] ml-[150px] min-h-[89vh] p-3" style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
        {dataCookies?
        <>
          <div  className='bg-gray-500 p-4 rounded-lg text-white w-full  cursor-pointer hover:bg-gray-400 transition-all duration-300 mt-5'  onClick={()=>setOpen1(!open1)}>
            <div className='flex justify-between   '><p>who  is the CEO of Tesla?</p> <span><KeyboardArrowDownIcon/></span></div>
            <div className={`${open1 ===true?"block":"hidden "} mt-3  transition-all duration-300`}> Elon Musk</div>
          </div>
          <div  className='bg-gray-500 p-4 rounded-lg text-white w-full  cursor-pointer hover:bg-gray-400 transition-all duration-300 mt-5'  onClick={()=>setOpen2(!open2)}>
            <div className='flex justify-between   '><p>what is the capital city of Australia?</p> <span><KeyboardArrowDownIcon/></span></div>
            <div className={`${open2 ===true?"block":"hidden "} mt-3  transition-all duration-300`}>Canberra</div>
          </div>
          <div  className='bg-gray-500 p-4 rounded-lg text-white w-full  cursor-pointer hover:bg-gray-400 transition-all duration-300 mt-5'  onClick={()=>setOpen3(!open3)}>
            <div className='flex justify-between   '><p>which planet has the most moons in our solar system?</p> <span><KeyboardArrowDownIcon/></span></div>
            <div className={`${open3 ===true?"block":"hidden "} mt-3  transition-all duration-300`}>Jupiter</div>
          </div>
        </>
        :
        <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>

        }
        
      
    </div>
  )
}
 