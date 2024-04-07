"use client"
import { Close } from '@mui/icons-material'
import { Alert, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar, useMediaQuery, useTheme } from '@mui/material'
import { Props } from 'next/script'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export default function page() {

  const cookies=new Cookies()
    const [isClient,setIsClient]=useState(false)

  const dataCookies=cookies.get("datauser")

  const themeFromMui=useTheme()

  const [fristName,setFristName]=useState<string >("")
  const [lastName,setLastName]=useState<string>("")
  const [email,setEmail]=useState<string>("")
  const [phone,setPhone]=useState<string>("")
  const [zipCode,setzipCode]=useState<string>("")
  const [address,setaddress]=useState<string>("")
  const [city,setCity]=useState<string>("")
  const [age,setAge]=useState<string>("")
  const [formControl,setFormControl]=useState<string>("")
  const [isValidPhone, setIsValidPhone] = useState<boolean>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [doneValid, setdoneValid] = useState<boolean>(false);
  const [flag, setflag] = useState<boolean>(false);
  const [allData,setAllData]=useState<Props[]>()


  let fullName:string=fristName+lastName
  const validateEmail= (value:any) => {
    const regex =/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    return regex.test(value);
  };
  const validatePhone= (value:any) => {
    const regex =/^\+?[0-9()-\s]+$/;
    return regex.test(value);
  };


  useEffect(()=>{
    let dataLocalstorage=localStorage.getItem("allData")
    if(dataLocalstorage !==null){
      setAllData(JSON.parse(dataLocalstorage))
    }
    setIsClient(true)
  },[])
  

  console.log(zipCode.length)
  function handelValided(e:any){

    e.preventDefault()

    setIsValidPhone(validatePhone(phone))
    setIsValidEmail(validateEmail(email))
    console.log(validateEmail(email))
    setdoneValid(true)
    
    if(Number(fristName?.length) >3 && Number(lastName?.length)>=3 && isValidEmail===true && isValidPhone === true && Number(address?.length)>5 && age.length >1 && Number(city?.length)>2 && Number(zipCode?.length)>3) {
      let newitem={"id":allData?.length,"name":fullName,"email":email,"phone":phone,"address":address,"access":formControl,"age":age,"zipCode":zipCode,"city":city}
      console.log("done")
      if(allData !==undefined ){
        handleClick()
        let newArray=[...allData,newitem]
        localStorage.setItem("allData",JSON.stringify(newArray))
      }
      setTimeout(() => {
        window.location.reload()
      }, 3000);
    }
  }


  const [role, setRole] = React.useState('');

  const handleChange = (event: any) => {
    setRole(event.target.value as string);
  };



  //SnackBar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div className="mt-[80px] ml-[150px] p-5 min-h-[89vh] " style={{color:themeFromMui.palette.mode === "dark"?themeFromMui.palette.common.white:themeFromMui.palette.common.black,background:themeFromMui.palette.mode === "light"?themeFromMui.palette.common.white:themeFromMui.palette.common.black}}>
      {useMediaQuery('(max-width:920px)')?
      <h1 className=' flex justify-center items-center text-3xl h-[80vh]'>open in large Screen to  view the Contant</h1>
      :
      <>
      {dataCookies && isClient?
        <form action="" onSubmit={handelValided} className='flex flex-col gap-3'>
          <div className='flex gap-5'>
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-1/2">
              <label htmlFor="" className='text-lg'>Frist Name</label>
              <input type="text"  placeholder='enter your frist name' onChange={(e)=>setFristName(e.target.value)}  className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg  placeholder:text-black transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {Number(fristName?.length) <3 && doneValid ===true ? <Alert severity="error">this Frist name less than 3</Alert>:""}
            </div>
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-1/2">
              <label htmlFor="" className='text-lg'>Last Name</label>
              <input type="text"  placeholder='enter your last name'  onChange={(e)=>setLastName(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {Number(lastName?.length) <3 && doneValid===true? <Alert severity="error">this last name less than 3</Alert>:""}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-1/2">
              <label htmlFor="" className='text-lg'>Email</label>
              <input type="text"  placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg  placeholder:text-black transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {isValidEmail === false && doneValid===true? <Alert severity="error">this email is not Valid,shoud be name@name.com</Alert>:" "}
            </div>
            <div className='bg-gray-700/60  text-wh p-4 rounded-lg w-1/2'>

              <h1 className='text-lg text-white'>Age</h1>
              <input type="number"  placeholder='enter your Age'  onChange={(e)=>setAge(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500 w-full  '/>
              {age.length <= 1 && doneValid===true? <Alert severity="error">this age is not Valid ,should be greater than 10...</Alert>:null}
            </div>

          </div>
          <div className='flex gap-5'>
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-full">
              <label htmlFor="" className='text-lg'>Contact</label>
              <input type="text"  placeholder='enter your phone'  onChange={(e)=>setPhone(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {isValidPhone === false && doneValid===true? <Alert severity="error">this phone is not Valid ,should be +20...</Alert>:null}
            </div>
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-full">
              <label htmlFor="" className='text-lg'>Zip Code</label>
              <input type="number"  placeholder='enter your Zip code'  onChange={(e)=>setzipCode(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {zipCode.length <4 && doneValid===true? <Alert severity="error">this Zip Code is not Valid ,should be greater than 4...</Alert>:null}
            </div>

          </div>
          <div className="flex gap-5">
            <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-1/2">
              <label htmlFor="" className='text-lg'>City</label>
              <input type="text"  placeholder='enter your adress'  onChange={(e)=>setCity(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {Number(city?.length) <2 && doneValid===true? <Alert severity="error">this city less than 2</Alert>:null}
            </div>
            <div className='bg-gray-700/60  text-wh p-4 rounded-lg w-1/2'>

              <h1 className='text-lg text-white'>Role</h1>
              <FormControl fullWidth className=''>
                {/* <InputLabel id="demo-simple-select-label" className='text-xl text-sky-500'></InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                  className='text-lg'
                  required
                  
                >
                  <MenuItem value={"user"} onClick={()=>setFormControl("user")} className=' text-sky-500 text-xl'>user</MenuItem>
                  <MenuItem value={"Admin"} onClick={()=>setFormControl("Admin")} className='text-sky-500  text-xl'>admin</MenuItem>
                  <MenuItem value={"Manage"} onClick={()=>setFormControl("Manager")} className='text-sky-500  text-xl '>manage</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='flex gap-5'>
          <div className="bg-gray-700/60  p-4 flex flex-col text-white rounded-lg w-full">
              <label htmlFor="" className='text-lg'>Address</label>
              <input type="text"  placeholder='enter your adress'  onChange={(e)=>setaddress(e.target.value)}   className='bg-gray-400/60 outline-none py-2 px-5 rounded-lg text-lg placeholder:text-black  transition-all border-2 border-gray-400/60 duration-300 hover:border-2 hover:border-sky-500  '/>
              {Number(address?.length) <5 && doneValid===true? <Alert severity="error">this address less than 5</Alert>:null}
            </div>
          </div>
            
          <button type='submit'   className='py-2 px-5 bg-sky-500 w-[300px] text-white text-lg rounded hover:bg-sky-600 transition-all duration-300  mx-auto'>Create New User</button>
          {/* <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} */}
          <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert  onClose={handleClose}  severity="success"  variant="filled"  sx={{ width: '100%' }}>This is a viled email  </Alert>
          </Snackbar>
          
        </form>
        :
        <div className="text-3xl flex justify-center h-[80vh] items-center">please go to register page and create email</div>
        }

      </>
      }
    </div>
  )
}
