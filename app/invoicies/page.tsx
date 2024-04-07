"use client"
import React, { useEffect, useState } from 'react'
import { data } from './data'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'
import "./invoice.css"
import { blue } from '@mui/material/colors'
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
  const [allData,setAllData]=useState<Props[]>()
  
    const [dataDetails,setDataDetails]=useState<Props[]>();
    const [inputFilterAge,setinputFilterAge]=useState<string>()
    const [inputFilterName,setinputFilterName]=useState<string >()
  // var localstorageAllData:Props[]|string |null=[]

  useEffect(()=>{
    localstorageMode=localStorage.getItem("mode")
    
    
    
     let localstorageAllData=localStorage.getItem("allData")
     if (localstorageAllData !== null) {
      // console.log(JSON.parse(localstorageAllData));
      setAllData(localStorage.getItem("allData")?JSON.parse(localstorageAllData):data)
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
  

  // if(allData !== null){
  //   setDataDetails(allData)
  // }

  
  function filterAge(){
    if(allData !== undefined){
      let newdata=allData.filter(item=> String(item.age).indexOf(String(inputFilterAge)) !== -1)
      if(inputFilterAge){
        setDataDetails(newdata)
      }
      if(inputFilterAge === ""){
        setDataDetails(allData)
      }
    }
  }
  function filterName(){
    if(allData !== undefined){
      let newdataName=allData.filter(item=> item.name.toLowerCase().indexOf(String(inputFilterName).toLowerCase()) !== -1)
      console.log(newdataName);
      if(inputFilterName){
        setDataDetails(newdataName)
      }
      if(inputFilterName === ""){
        setDataDetails(allData)
      }
    }
  }


  function checkbox(){
    const itemCheckBox =document.querySelectorAll <HTMLInputElement>(".checkbox")
    const itemCheckBoxMain =document.querySelectorAll <HTMLInputElement>(".checkboxmain")
    itemCheckBox.forEach((item)=>{
      if(itemCheckBoxMain[0].checked===false){
        item.checked=false 
      }if(itemCheckBoxMain[0].checked===true){
        item.checked=true
      }
    })
  }

  function handelDelate(selectId:number){
    const newData=dataDetails?.filter(item =>item.id!==selectId )
    localStorage.setItem("allData",JSON.stringify(newData));
    setDataDetails(newData)
  }
  
  return (
    <div className="mt-[80px] ml-[150px] p-3 min-h-[89vh]" style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
      {useMediaQuery('(max-width:1050px)')?
    <h1 className=' flex justify-center items-center text-3xl h-[80vh]'>open in large Screen to  view the Contant</h1>
    :
    <>
    {dataDetails !== undefined   && dataDetails !==null && dataCookies?
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
            <td><input type="checkbox" placeholder=' ' className='checkboxmain' onClick={()=>checkbox()} style={{width:"17px",height:"17px"}}  /></td>
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
            dataDetails.map((item:Props,index:number)=>{
              return(
                <tr key={index}>
                  <td><input type="checkbox"  placeholder=' ' className='checkbox' style={{width:"17px",height:"17px"}}  /></td>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.registrarId}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td className='w-[500px]'>{item.phone}</td>
                  <td className='w-[500px]'>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.zipCode}</td>
                  <td><button onClick={()=>handelDelate(item.id)} className='py-2 px-3 bg-red-600 text-white hover:bg-red-800 transition-all duration-300 rounded-lg'>Delete</button></td>
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
