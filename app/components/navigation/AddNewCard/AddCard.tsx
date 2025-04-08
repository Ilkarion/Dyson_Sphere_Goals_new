'use client'
import Image from "next/image"
import plusImg from "@/app/assets/addBtn.svg"
import style from "./addCard.module.scss"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import SkillDescribtion from "@/app/Skills/components/skillsDescribtion/SkillDescribtion"
import Load from "./load"
import { createClient } from "@/utils/supabase/client"
import { getData } from "./talkToServer/getData"



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
  

function AddMenuPortalDOM({children}:{children: React.ReactNode}) {
    if (typeof window === 'undefined') {return null}
    const menuRoot = document.getElementById("creator-card-menu")
    return menuRoot ? createPortal(children, menuRoot) : null
}

function collectData({goal_name, stage_name, stage_points}:{goal_name:string, stage_name:string, stage_points:string}) {
    const stageObj: GoalResultCard = {
        "skill": {
            "date": "01.01.2025-01.03.2025",
            "name": "happy",
            "stages": [
                {
                    "date": "01.01.2025-01.03.2025",
                    "name": "update yourself",
                    "points": ["read book", "swimming", "friends"]
                }
            ]
        }
    }
    //goal name
    stageObj.skill.name = goal_name

    //stages
    const points = stage_points.split(" ")
    stageObj.skill.stages[0].name = stage_name
    for(let i = 0; i < points.length; i++) {
        if(points[i] != " ") {
            stageObj.skill.stages[0].points.push(points[i])
        }
    }
    // console.log(`Stage object: ${JSON.stringify(stageObj)}`) OK
}

export default function AddCard() {
    const [backData, setBackData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const dataSkills = await getData()
            if(dataSkills != null) {
                setBackData(dataSkills)
            }
        }
        // fetchData()
    },[])

    const stageNameRef = useRef<HTMLInputElement>(null)
    const stagePointsRef = useRef<HTMLInputElement>(null)
    const goalName = useRef<HTMLInputElement>(null)

    const [clicked, setClick] = useState(false)
    const [goalNameInp, setGoalNameInp] = useState<string>("")
    const [stageNameInp, setStageNameInp] = useState<string>("")
    const [pointsNameInp, setPointsNameInp] = useState<string>("")

    return (
        <>
            <Image src={plusImg} alt="Add new skill" className={style.addCard} onClick={()=>setClick(!clicked)}/>
            {clicked ? 
            <AddMenuPortalDOM>
                <div className={style.cardCreatorMenu}>
                    <div>
                        <div className={style.goalAdd}>
                            <input 
                            type="text"
                            aria-label="goal name"
                            placeholder="goal name"
                            ref={goalName}/>
                            <button type="button"
                            onClick={()=>{
                                const name = goalName.current?.value || ""
                                setGoalNameInp(name)
                                if (goalName.current) goalName.current.value = ""
                            }}>Add</button>
                        </div>
                        <div className={style.addStage}>
                            <div className={style.addStageInputs}>
                                <input 
                                type="text"
                                aria-label="Stage name"
                                placeholder="stage name"
                                ref={stageNameRef}/>

                                <input
                                type="text"
                                aria-label="stage points"
                                placeholder="stage points"
                                ref={stagePointsRef}/>

                            </div>
                            <input type="button" value="Add" className={`${style.addStageBtn} ${style.pAddBtn}`} onClick={()=>{
                                const stageName = stageNameRef.current?.value || ""
                                const stagePoints = stagePointsRef.current?.value || ""
                                setStageNameInp(stageName)
                                setPointsNameInp(stagePoints)
                                if (stageNameRef.current) stageNameRef.current.value = ""
                                if (stagePointsRef.current) stagePointsRef.current.value = ""
                            }}
                            />
                        </div>
                        {
                            stageNameInp || pointsNameInp || goalNameInp ? 
                            // <SkillDescribtion idBox={}/> 
                            <div></div>
                            : <></>
                        }
                        <input type="submit" value="Add" onClick={()=>collectData({
                            goal_name:goalNameInp,
                            stage_name:stageNameInp,
                            stage_points:pointsNameInp
                        })}/>
                    </div>
                </div>
            </AddMenuPortalDOM> : ""}
        </>
    )
};
