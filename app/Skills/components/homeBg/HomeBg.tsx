'use client'
import style from "./homeBg.module.scss"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"


export default function HomeBg() {
    
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(()=>{setMounted(true)}, [])
    if(!mounted) { return null }

    return(
        <div className={`${style.bgTheme} 
        ${resolvedTheme=='light' ? style.bgLinesLight : style.bgLinesDark}`
        }>

        </div>
    )
};
