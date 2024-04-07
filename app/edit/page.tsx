"use client"
import { Alert, Snackbar, useTheme } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export default function page() {
    const cookies=new Cookies()
    const dataCookies=cookies.get("datauser")
    const [name,setName]=useState<string>(dataCookies?.name)
    const [email,setEmail]=useState <string>(dataCookies?.email)
    const [password,setPassward]=useState <string>(dataCookies?.password)
    const [valideEmail,setValideEmail]=useState <boolean>(false)
    const [isDone,setIsDone]=useState <boolean>(false)
    const [isDoneSnackBar,setIsDoneSnackBar]=useState <boolean>(false)
    const theme=useTheme()

    const Route=useRouter()

    const ValideEmail=(value:any)=>{
        const regex =/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return regex.test(value)
    }

    function handelValid(e:any){
        e.preventDefault()
        setValideEmail(ValideEmail(email))
        setIsDone(true)
        if(Number(name?.length)>=3 &&  Number(password?.length) >=10 && valideEmail=== true){
            const data={"name":name,"email":email,"password":password}
            cookies.set("datauser",data)
            setIsDoneSnackBar(true)
            setTimeout(()=>{
                Route.push("/person")
            },1500)
            
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
    <div  className="mt-[80px] ml-[150px] p-3 min-h-[89vh] flex justify-center items-center flex-col sm:flex-row gap-10" style={{background:theme.palette.background.default,color:theme.palette.text.primary}}>
        <form action="" onSubmit={handelValid} className='bg-slate-800 rounded-lg min-w-[300px] p-5'>
            <h1 className='text-3xl text-blue-600 text-center mb-5'>Edit Profile</h1>
            <input type="text" placeholder='edit your Name'  value={name} onChange={(e)=>setName(e.target.value)} className='w-full p-2 text-white rounded-lg outline-none border-2 border-slate-500 hover:border-blue-500 transition-all duration-300 bg-slate-500'/>
            {Number(name?.length) <= 3 && isDone==true?<Alert severity='error'> lenth of name is less than 3</Alert>:" "}
            <input type="text" placeholder='edit your email ' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 text-white rounded-lg outline-none border-2 border-slate-500 hover:border-blue-500 transition-all duration-300 my-4 bg-slate-500'/>
            {valideEmail ===false && isDone?<Alert severity='error'>this email is not valide</Alert>:""}
            <input type="text" placeholder='edit your Password' value={password} onChange={(e)=>setPassward(e.target.value)} className='w-full p-2 text-white rounded-lg outline-none border-2 border-slate-500 hover:border-blue-500 transition-all duration-300 bg-slate-500'/>
            {Number(password?.length)<10 && isDone?<Alert severity='error'> lenth of password is less than 9</Alert>:""}
            <div className='mt-5 text-center'>
                <button type='submit' onClick={handleClick}className='py-2 px-2 bg-blue-500 rounded-lg w-[90px] text-lg hover:bg-blue-600 transition-all duration-300'>Edite</button>
            </div>
        </form>
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          
        >
          Your Email is done 
        </Alert>
      </Snackbar>
        
    </div>
  ) 
}
