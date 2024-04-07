"use client"
import { useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export default function page() {
    const [image,setImage]=useState<any>()
    const [name,setName]=useState<any>()
    const [email,setEmail]=useState<any>()
    const [password,setPassward]=useState<any>()
    const cookies =new Cookies()
    const dataCookies=cookies.get("datauser")
    useEffect(()=>{
        if(localStorage.getItem("image")){
            setImage(localStorage.getItem("image"))
            setName(dataCookies?.name)
            setEmail(dataCookies?.email)
        }
    })
    const theme=useTheme()
  return (
    <div className="mt-[80px] ml-[150px] p-3 min-h-[89vh] flex justify-center items-center flex-col sm:flex-row gap-10" style={{background:theme.palette.background.default,color:theme.palette.text.primary}}>
        {dataCookies?
        <>
            <div className='w-[300px] h-[300px] rounded-full '><Image src={image} height={200} width={200} alt={""} className='w-full h-full rounded-full'/></div>
            <div>
                <div className='mb-4'>
                    <h1 className='text-xl'>Name: <span className='text-md text-sky-700'>{name}</span></h1>
                    <h1 className='text-xl my-2'>Email: <span className='text-md text-sky-700'>{email}</span></h1>
                    <h1 className='text-xl'>Password: <span className='text-md text-sky-700'>***********..</span></h1>
                </div>
                <div className='text-center'>
                    <Link href={"/edit"}>
                        <button className='py-2 px-4 text-lg bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-full '>Edit Profile</button>
                    </Link>
                </div>
            </div>
        </>
        :
        <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>
}
    </div>
  )
}
