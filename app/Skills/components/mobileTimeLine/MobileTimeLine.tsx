'use client'

import style from "./mobileTimeLine.module.scss"
import SkillComponent from "./SkillComponent"

import { getData } from "@/app/components/navigation/AddNewCard/talkToServer/getData"
import { useState, useEffect } from "react"


interface GoalResultCard {
    skill: {
        date: string;
        name: string;
        stages: {
            date: string;
            name: string;
            points: string[];
        }[];
    };
}

interface stages {
        date: string;
        name: string;
        points: string[];
}

function chooseMode(earliestFrom:string[], latestTo:string[]) {
    const startDate = new Date(`${earliestFrom[2]}-${earliestFrom[1]}-${earliestFrom[0]}`);
    const endDate = new Date(`${latestTo[2]}-${latestTo[1]}-${latestTo[0]}`);
    const today = new Date();
    
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const todayTime = today.getTime();
    
    if (todayTime >= startTime && todayTime <= endTime) {
        const totalDays = Math.round((endTime - startTime) / (1000 * 60 * 60 * 24));
        const passedDays = Math.round((todayTime - startTime) / (1000 * 60 * 60 * 24));
        const percent = Math.round((passedDays / totalDays) * 100);
        return (`In progress ${percent}%`);
    } else if (todayTime < startTime) {
        return ("not started");
    } else {
        return "unfinished";
    }
}

function generateDate(dates:string[]) {
    const datesFrom:string[][] = []
    const datesTo:string[][] = []
    dates.forEach(elem => {
        const to:string = elem.split("-")[1]
        const from:string = elem.split("-")[0]
        datesFrom.push(from.split("."))
        datesTo.push(to.split("."))
    })
    let earliestFrom = datesFrom[0]
    for(let i=1; i < datesFrom.length; i++) {
        const earliestYear = parseInt(earliestFrom[2])
        const datesYear = parseInt(datesFrom[i][2])

        const earliestMonth = parseInt(earliestFrom[1])
        const datesMonth = parseInt(datesFrom[i][1])

        const earliestDay = parseInt(earliestFrom[0])
        const datesDay = parseInt(datesFrom[i][0])
        if(datesYear < earliestYear) {
            earliestFrom = datesFrom[i]
            continue
        } else if (datesMonth < earliestMonth) {
            earliestFrom = datesFrom[i]
            continue
        } else if(datesDay < earliestDay) {
            earliestFrom = datesFrom[i]
        }
    }

    let latestTo = datesTo[0]
    for(let i=1; i < datesTo.length; i++) {
        const latestYear = parseInt(latestTo[2])
        const datesYear = parseInt(datesTo[i][2])

        const latestMonth = parseInt(latestTo[1])
        const datesMonth = parseInt(datesTo[i][1])

        const latestDay = parseInt(latestTo[0])
        const datesDay = parseInt(datesTo[i][0])
        if(datesYear > latestYear) {
            latestTo = datesTo[i]
            continue
        } else if (datesMonth > latestMonth) {
            latestTo = datesTo[i]
            continue
        } else if(datesDay > latestDay) {
            latestTo = datesTo[i]
        }
    }
    const finalDate = earliestFrom + "-" + latestTo
    console.log(finalDate)
    return chooseMode(earliestFrom, latestTo)
}

export default function MobileTimeLine() {
    const [backDataSkills, setBackDataSkills] = useState<GoalResultCard[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            const dataSkills = await getData()
            if(dataSkills != null) {
                // console.log(JSON.stringify(dataSkills, null, 2))
                setBackDataSkills(dataSkills.main_skill)
            }

        }
        fetchData()
    },[])

    function dateMode(dates:stages[]) {
        const datesArr:string[] = []
        if(backDataSkills) {
            dates.forEach(elem => {
                datesArr.push(elem.date)
            });
        return generateDate(datesArr)
        }
    }
const skills = backDataSkills
    return(
        <>
            <div className={style.mainLine}></div>
            <div className={style.allLine}>
                {backDataSkills.map((item, key)=>{
                    
                    
                    return <SkillComponent 
                    mode={dateMode(item.skill.stages) || ""}
                    idBox={1}
                    goalName={item.skill.name}
                    stages={{stages: item.skill.stages}}
                    date={item.skill.date}
                    key={key}/>
                })}
            </div>
        </>
    )
};
