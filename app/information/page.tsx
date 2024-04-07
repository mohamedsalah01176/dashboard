"use client"
import React, { useEffect, useState } from 'react'
import { data } from './data'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'
import "./information.css"
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
  registrarId:number
}

export default function page() {
  const cookies=new Cookies()
  const dataCookies=cookies.get("datauser")

  const themeFromMui=useTheme()
  let localstorageMode;
  let localstorageAllData ;
  // const [allData,setAllData]=useState()
  const [dataDetails,setDataDetails]=useState<Props[]>()
  const [inputFilterAge,setinputFilterAge]=useState<string>()
  const [inputFilterName,setinputFilterName]=useState<string >()
  
  useEffect(()=>{
    localstorageMode=localStorage.getItem("mode")    
      
       let localstorageAllData=localStorage.getItem("allData")
       if (localstorageAllData !== null) {
        // console.log(JSON.parse(localstorageAllData));
        setDataDetails(localStorage.getItem("allData")?JSON.parse(localstorageAllData):data)  
      }


      const datalocal=localStorage.getItem("allData")
      if(datalocal!== null){

        localStorage.setItem("allData",datalocal)
      }
      else{
        localStorage.setItem("allData",JSON.stringify(data))
  
      }
    
  },[])



  
  function filterAge(){
    if(dataDetails !== undefined){
      let newdata=dataDetails.filter(item=> String(item.age).indexOf(inputFilterAge!) !== -1)
      if(inputFilterAge){
        setDataDetails(newdata)
      }
      if(inputFilterAge === ""){
        setDataDetails(dataDetails)
      }
    }
  }
  function filterName(){
    if(dataDetails!==undefined){
      let newdataName=dataDetails.filter(item=> item.name.toLowerCase().indexOf(inputFilterName!.toLowerCase()) !== -1)
      console.log(newdataName);
      if(inputFilterName){
        setDataDetails(newdataName)
      }
      if(inputFilterName === ""){
        setDataDetails(dataDetails)
      }
    }
  }

  return (
    <div className="mt-[80px] ml-[150px] p-3 min-h-[89vh]" style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
      {useMediaQuery('(max-width:1050px)')?
    <h1 className=' flex justify-center items-center text-3xl h-[80vh]'>open in large Screen to  view the Content</h1>
    :
    <>
    {dataDetails !== null && dataDetails !==undefined && dataCookies?
    <>
      <div className='flex gap-5'>
        <div className='flex items-center mb-2   '>
          <p>Age:</p>
          <input type="text" onChange={(e)=>setinputFilterAge(e.target.value)} placeholder=' age' onKeyUp={()=>filterAge()} className='w-[50px] py-1 px-2 outline-none border-b-2 border-blue-500' style={{background:themeFromMui.palette.mode ==="dark"?"black":"white"}}/>
        </div>
        <div className='flex items-center mb-2   '>
          <p>name:</p>
          <input type="text" onChange={(e)=>setinputFilterName(e.target.value)} placeholder=' name' onKeyUp={()=>filterName()} className='w-[120px] py-1 px-2 outline-none border-b-2 border-blue-500' style={{background:themeFromMui.palette.mode ==="dark"?"black":"white"}}/>
        </div>
      </div>
        <table className='text-md' style={{background:localstorageMode=== "dark"?"#2d2c2ca9":"ffff"}}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>RegistrarId</td>
              <td>Email</td>
              <td>age</td>
              <td>Phone</td>
              <td>Address</td>
              <td>City</td>
              <td>ZipCode</td>
              
            </tr>
          </thead>
          <tbody>
            {
              dataDetails.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.registrarId}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td className='w-[500px]'>{item.phone}</td>
                    <td className='w-[500px]'>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.zipCode}</td>
                  </tr>
                )
              })
            }
          </tbody>
          
        </table>
    </>
    :
    <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>
    }
    </>
  }
    </div>
  )
}
