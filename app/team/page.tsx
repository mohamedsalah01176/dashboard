"use client"
import React, { useEffect, useState } from 'react'
import { data } from '../information/data'
import "./team.css"
import { useMediaQuery, useTheme } from '@mui/material'
import Cookies from 'universal-cookie'

interface  Props {
  id:number,
  name:string,
  email:string,
  age:number,
  phone:string,
  address:string,
  city:string,
  zipCode:string,
  registrarId:number,
  access:string
}

export default function page() {
  // const [isClient,setIsClient]=useState(false)
  const cookies=new Cookies()
  const dataCookies=cookies.get("datauser")

  const themeFromMui=useTheme()
  const [dataDetails,setDataDetails]=useState<Props[]>()
  let localstorage;
  useEffect(()=>{
    localstorage=localStorage.getItem("mode")
    let localstorageAllData=localStorage.getItem("allData")
    const datalocal=localStorage.getItem("allData")

    if(datalocal!== null){

      localStorage.setItem("allData",datalocal)
    }
    else{
      localStorage.setItem("allData",JSON.stringify(data))

    }

     if (localstorageAllData !== null) {
      // console.log(JSON.parse(localstorageAllData));
      setDataDetails(localStorage.getItem("allData")?JSON.parse(localstorageAllData):data)

    }
    // setIsClient(true)
  },[])
  return (
    <div className="mt-[80px] ml-[150px] p-3 min-h-[89vh]" style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
      {useMediaQuery('(max-width:920px)')?
    <h1 className=' flex justify-center items-center text-3xl h-[80vh]'>open in large Screen to  view the Contant</h1>
    :
    <>
    {dataDetails !== undefined   && dataDetails !==null && dataCookies?
    <table className='text-md' style={{background:localstorage=== "dark"?"#2d2c2ca9":"ffff"}}>
    <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>age</td>
        <td>Phone</td>
        <td>access</td>
      </tr>
    </thead>
    <tbody>
      {dataDetails.map((item,index)=>{
        return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.phone}</td>
            <td><button className='py-2 px-4  rounded-lg w-[100px] text-[17px] text-white cursor-pointer' style={{background:item.access === "Admin"?themeFromMui.palette.primary.dark: item.access === "Manager" ?themeFromMui.palette.secondary.dark:"green"}}>{item.access}</button></td>
          </tr>
        )
      })}
    </tbody>
    
  </table>
    :
    <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>

  }
    </>
        
  }
    </div>
  )
}
