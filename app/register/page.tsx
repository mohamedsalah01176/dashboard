"use client"
import React,{ useState } from 'react'
import { Alert, Snackbar, useTheme } from '@mui/material'
import Image from 'next/image'
import Cookies from 'universal-cookie';



export default function page() {
    const [name,setName]=useState <string>("")
    const [email,setEmail]=useState <string>("")
    const [password,setPassword]=useState <string>("")
    const [image,setImage]=useState <string>()
    // const [imageURL,setImageURL]=useState <string>()
    const [doneValid,setDoneValid]=useState <boolean>(false)
    const [isValidateEmail,setIsValidateEmail]=useState <boolean>(false)
    let URLimage:any;

    const cookies=new Cookies()
    // if(image){
    //     URLimage=URL.createObjectURL(image) 
    // }

    

    const validateEmail= (value:any) => {
        const regex =/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return regex.test(value);
      };

    const theme =useTheme()

   

    const handleImageUpload = (file:any) => {

      const reader = new FileReader();

      reader.onload = () => {
        const url:any = reader.result;
        // Save image URL to localStorage
        localStorage.setItem("image",url)

        setImage(url);
      }
      reader.readAsDataURL(file);
    }

  
    
    

    

    function  handleSubmit(e:any){
        e.preventDefault()
        setDoneValid(true)
        setIsValidateEmail(validateEmail(email))
        // getImageURL(image)
        if(name.length >3 && isValidateEmail == true && password.length >10 && image !==null){
            const data={
                "name":name,
                "password":password,
                "email": email,
                // "img":URLimage,
            }
            
            cookies.set("datauser",JSON.stringify(data))
            setTimeout(()=>{
                window.location.href="/login"
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

console.log(image)

  return (
    <div className='mt-[77px] flex justify-center items-center h-[90vh]' style={{background:theme.palette.background.default}}> 
        <form onSubmit={handleSubmit} className='bg-slate-600 p-5 flex flex-col min-w-[300px] md:min-w-[600px] gap-7 rounded-lg '>
            <h1 className='text-4xl text-sky-500 text-center font-semibold'>Register</h1>
            <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700'/>
            {Number(name.length) <=3 && doneValid ===true ? <Alert severity="error">this name less than 3</Alert>:""}
            <input type="text" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700' />
            {isValidateEmail == false && doneValid ===true ? <Alert severity="error">this Frist name less than 3</Alert>:""}
            <input type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700' />
            {Number(password.length) <= 10 && doneValid ===true ? <Alert severity="error">this password less than 10</Alert>:""}
            <input type="file" placeholder='enter your image' id='img' onChange={(e)=>{handleImageUpload(e.target.files?.[0])}} className='bg-slate-300 p-2 border-none outline-none rounded-lg text-sky-700' />
            {image == null && doneValid ===true ? <Alert severity="error">add image</Alert>:""}
            <button type='submit' className='py-2 px-4 bg-sky-600 rounded-lg text-white hover:bg-sky-500 transition-all duration-300'>Create</button>
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
