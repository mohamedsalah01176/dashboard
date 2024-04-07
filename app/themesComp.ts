// No use this code of filebut import in layout
import {grey} from "@mui/material/colors"
import {createTheme} from "@mui/material/styles"
import { createContext, useMemo, useState } from "react"

export const getDesignTokens=(mode:any)=>({
    palette:{
        mode,
        ...(mode === "light" ?{
            text:{
                primary:"#2B3445",
            },
            neutral:{
                main:"#64748B"
            },
            favColor:{
                main:grey[300]
            },
            iconColor:{
                main:"#fff"
            }
        }:
        {
            text:{
                primary:"#fff"
            },
            neutral:{
                main:"#64748B"
            },
            favColor:{
                main: grey[800]
            },
            iconColor:{
                main:"#fff"
            }

        })
    }
}) 


export const ColorModeContext=createContext({
    toggleColorMode:()=>{},
})


export const UseMode=()=>{
    const [mode,setMode]=useState(
        localStorage.getItem("mode")?localStorage.getItem("mode"):"light"
    )


    const colorMode=useMemo(
        ()=>({
            toggleColorMode:()=> setMode((prev)=> (prev === "light"?"dark":"light"))
        }),[]
    )
    
    const theme=useMemo(()=>createTheme(getDesignTokens(mode)),[mode])
    return[theme,colorMode]
}