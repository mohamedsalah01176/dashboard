"use client"
import { useEffect, useState } from "react"
import { data } from "./information/data"
import Row1 from "./Component/Row1/Row1"
import Row2 from "./Component/Row2/Row2"
import Row3 from "./Component/Row3/Row3"
import { useTheme } from "@mui/material"
import Row4 from "./Component/Row4/Row4"
import Cookies from "universal-cookie"

export default function Page() {
  const cookies=new Cookies()
  const [isClient,setIsClient]=useState(false)
  const dataCookies=cookies.get("datauser")
  const themeFromMui=useTheme()
  useEffect(()=>{
    const datalocal=localStorage.getItem("allData")
    if(datalocal!== null){

      localStorage.setItem("allData",datalocal)
    }
    else{
      localStorage.setItem("allData",JSON.stringify(data))

    }
    setIsClient(true)
  })
  
  if(isClient === true){
    return(
    <div className="mt-[80px] ml-[150px] p-3 min-h-[90vh]" style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
      {dataCookies?
      <>
        <Row1/>
        <Row2/>
        <Row3/>
        <Row4/>
      </>
      :
      
        <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>
      
      }
  
    </div>
    )
  }
}