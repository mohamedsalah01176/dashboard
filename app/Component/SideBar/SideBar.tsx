"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import style from"./silder.module.css"
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import { usePathname } from 'next/navigation';
import Cookies from 'universal-cookie';




export default function SideBar() {
  const themeFromMui=useTheme()
  const location=usePathname()

  const [nameLocal,setnameLocal]=useState <string>("")

  const [image,setImg]=useState<any>("")
  const cookies=new Cookies()
  const dataCooke=cookies.get("datauser")


  useEffect(()=>{
    const DataLocal=localStorage.getItem('image');
  if(DataLocal !== null){
    setImg(DataLocal)
  }
    setnameLocal(dataCooke?.name)
  },[])


  return (
    <div className={` fixed top-[80px] left-0 h-[90vh] w-[150px] py-5  flex gap-7  items-center flex-col  overflow-y-scroll ${style.scroll}`} style={{background:themeFromMui.palette.mode ==="light"?themeFromMui.palette.primary.main:themeFromMui.palette.common.black,color:themeFromMui.palette.mode ==="light"?"#ffff":themeFromMui.palette.primary.dark}}>
      <div>
        <Image height={50} width={70}  src={image}  alt={"kkk"} className='rounded-full mx-auto h-[90px] w-[90px]' />
        <h1>{nameLocal}</h1>
        <p className='text-center'>Admin</p>
      </div>
      <div className='border-t border-gray-500 flex flex-col items-center gap-1 w-full '>
        <Link href={"/"} className={` hover:scale-110 hover:bg-blue-700 transition-all  duration-300 cursor-pointer flex items-center gap-1 w-full p-3`} style={{background:location === "/"?themeFromMui.palette.grey[500]:""}}><CottageOutlinedIcon className='text-3xl font-bold '/><span className=' text-lg'>Dashboard</span></Link>
        <Link href={"/team"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/team"?themeFromMui.palette.grey[500]:""}}><PeopleOutlineOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>Manage Team</span></Link>
        <Link href={"/information"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/information"?themeFromMui.palette.grey[500]:""}}><ContactsOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>information</span></Link>
        <Link href={"/invoicies"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/invoicies"?themeFromMui.palette.grey[500]:""}}><InventoryOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>Invoicies</span></Link>
      </div>
      <div className='border-t  border-gray-500 flex flex-col items-center gap-1 w-full'>
        <Link href={"/profile"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/profile"?themeFromMui.palette.grey[500]:""}}><Person2OutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer mt-2'/><span className=' text-lg'>Profile</span></Link>
        <Link href={"/calender"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/calender"?themeFromMui.palette.grey[500]:""}}><CalendarMonthOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>Calender</span></Link>
        <Link href={"/faqPage"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/faqPage"?themeFromMui.palette.grey[500]:""}}><QuizOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>FAQ Page</span></Link>
      </div>
      <div className='border-t  border-gray-500 flex flex-col items-center gap-1 w-full'>
        <Link href={"/barChart"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/barChart"?themeFromMui.palette.grey[500]:""}}><BarChartOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer mt-2'/><span className=' text-lg'>Bar Chart</span></Link>
        <Link href={"/pieChart"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/pieChart"?themeFromMui.palette.grey[500]:""}}><PieChartOutlineOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>Pie chart</span></Link>
        <Link href={"/lineChaer"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/lineChaer"?themeFromMui.palette.grey[500]:""}}><ShowChartOutlinedIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>Line chart</span></Link>
        <Link href={"/geographyChart"} className=' hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-1 w-full p-3' style={{background:location === "/geographyChart"?themeFromMui.palette.grey[500]:""}}><InsertChartOutlinedSharpIcon className='text-3xl font-bold hover:scale-125 transition-all duration-300 cursor-pointer'/><span className=' text-lg'>geography chart</span></Link>

      </div>
    </div>
  )
}
