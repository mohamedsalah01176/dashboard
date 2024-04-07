"use client"
import { Alert, Snackbar, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export default function page() {
  const [email,setEmail]=useState <string>("")
  const [emailLocal,setEmailLocal]=useState <string>("")
  const [password,setPassword]=useState <string>("")
  const [passwordLocal,setPasswordLocal]=useState <string>("")
  const [doneValid,setDoneValid]=useState <boolean>(false)
  const [isValidateEmail,setIsValidateEmail]=useState <boolean>(false)
  const theme=useTheme()
  const cookies=new Cookies()

  const dataCooke=cookies.get('datauser')

useEffect(()=>{
//   const DataLocal=localStorage.getItem('datauser');
//   if(DataLocal !== null){
//     const dataItem=JSON.parse(DataLocal);
    setEmailLocal(dataCooke?.email)
    setPasswordLocal(dataCooke?.password)
//   }
},[])
  

  function  handleSubmit(e:any){
    e.preventDefault()
    setDoneValid(true)
    if( email === dataCooke.email && password === dataCooke.password){
        
        setTimeout(()=>{
            window.location.href="/"
        },1500)
        handleClick()
    }
}


const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  return (
    <div className='mt-[77px] flex justify-center items-center h-[90vh]' style={{background:theme.palette.background.default}}>
      <form onSubmit={handleSubmit} className='bg-slate-600 p-5 flex flex-col min-w-[300px] md:min-w-[600px] gap-7 rounded-lg '>
        <h1 className='text-4xl text-sky-500 text-center font-semibold'>Login</h1>
        <input type="text" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700' />
        {email !== emailLocal &&doneValid ===true ? <Alert severity="error">Not found this email</Alert>:""}
        <input type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700' />
        {password !== passwordLocal && doneValid ===true ? <Alert severity="error">This password is  incorrect!</Alert>: ""}
        <button type='submit' className='py-2 px-4 bg-sky-600 rounded-lg text-white hover:bg-sky-500 transition-all duration-300'>Login</button>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          
        >
          Your Email is success 
        </Alert>
      </Snackbar>
    </div>

  )
}
