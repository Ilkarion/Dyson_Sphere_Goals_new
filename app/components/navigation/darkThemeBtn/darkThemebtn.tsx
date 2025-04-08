'use client'
import darkOption from "@/app/assets/dark-theme.png"
import Image from "next/image"
import { useTheme } from "next-themes"
import style from "./darkBtn.module.scss"
import { useState, useEffect } from "react"


export default function DarkThemebtn() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
    return(
            <Image src={darkOption} alt="dark theme" 
            onClick={()=>setTheme("dark")}
            className={`${resolvedTheme=='dark' ? style.darkBtnActive : style.darkBtn}
                        ${resolvedTheme=='dark' ? "" : style.darkBtnEf}`}
            />
    )
};
