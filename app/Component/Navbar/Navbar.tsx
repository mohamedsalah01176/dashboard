"use client"
import { IconButton, alpha, styled, useTheme } from '@mui/material';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { DarkMode, LightMode, Notifications, Person, Settings } from '@mui/icons-material';
import Cookies from 'universal-cookie';





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Navbar({setMode}:any) {
  const themeFromMui=useTheme() 
  const cookeis=new Cookies()
  const dataCookies=cookeis.get("datauser")
  const [email,setemail]=useState()
  useEffect(()=>{
    setemail(dataCookies?.email)
  })

  

  function handelLogout(){
    cookeis.remove("datauser" );
    localStorage.removeItem("image")
    window.location.reload()
  }
  return (
    <div className={`fixed w-full  p-5 top-0 left-0 z-10 `} style={{background:themeFromMui.palette.mode ==="light"?themeFromMui.palette.primary.main:themeFromMui.palette.common.black,color:themeFromMui.palette.mode ==="light"?"#ffff":themeFromMui.palette.primary.dark}} >
      <div className='w-[80%] mx-auto flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <Link href={"/"} className={`text-4xl font-medium   hover:scale-110 transition-all duration-500 w-fit`}>MS</Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>  
        <div className='flex gap-0 md:gap-3 items-center '>
          {themeFromMui.palette.mode == "light"?
          <LightMode onClick={()=>{localStorage.setItem("mode","dark"),setMode((prevMode: any) =>prevMode === 'light' ? 'dark' : 'light');}} className='hover:bg-slate-400/50 transition-all duration-300 rounded-full p-1 w-9 h-9 cursor-pointer'/>
          :
          <DarkMode onClick={()=>{localStorage.setItem("mode","light"),setMode((prevMode: any) =>prevMode === 'light' ? 'dark' : 'light');}} className='hover:bg-slate-400/50 transition-all duration-300 rounded-full p-1 w-9 h-9 cursor-pointer'/>       
          }
          <Link href={"/person"}>
            <Person className='hover:bg-slate-400/50 transition-all duration-300 rounded-full p-1  w-9 h-9 cursor-pointer'/>
          </Link>
          <div>
            {email ?
            <>
              <button onClick={handelLogout} className='p-2 hover:bg-slate-50/30 transition-all duration-300 rounded '>logOut</button>
            </>
              
            :
            <div>
              <Link href={"/login"} className='p-2 hover:bg-slate-50/30 transition-all duration-300 rounded '>Login</Link>
              <Link href={"/register"}  className='p-2 hover:bg-slate-50/30 transition-all duration-300 rounded '>Register</Link>
            </div>
            }
          </div>
          </div>
      </div>
      
    </div>
  )
}
