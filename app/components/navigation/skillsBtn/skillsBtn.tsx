'use client'
import style from "./skillsBtn.module.scss"
import Image from "next/image"
import skillsImg from "@/app/assets/skills.png"


export default function SkillsBtn() {
    return (
        <Image src={skillsImg} 
        alt="show skills"
        className={style.navigBtn}
        />
    )
};
