"use client"
import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "./Component/Navbar/Navbar";
import SideBar from "./Component/SideBar/SideBar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "./themesComp";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata: Metadata = {
//   title: "daishboord",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let getelm;
    
    useEffect(()=>{
    },[])
    if(typeof window !== "undefined"){
      getelm=localStorage.getItem("mode")
    }
  
  const [mode, setMode] = useState(getelm?getelm:"dark");
  const theme =useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const path=usePathname()
  // console.log(path)

  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={`${roboto.className} relative`}>
          {path === "/login" || path === "/register"?
          <Navbar setMode={setMode} />
          :
          <>
            <Navbar setMode={setMode} />
            <SideBar/>
          </>
        }
          {children}

          </body>
      </html>
    </ThemeProvider>
  );
}
