'use client'
import style from "./skillDescribtion.module.scss"
import * as Accordion from "@radix-ui/react-accordion"
import { useState } from "react";
import MiniGoal from "./components/miniGoalSection/MiniGoal";




interface stages {
    stages: {
        date: string;
        name: string;
        points: string[];
    }[];
}


export default function SkillDescribtion({idBox, goalName, stages, date}:{idBox:number, goalName:string, stages:stages, date:string}) {
    // const { resolvedTheme } = useTheme()
    const [open, setOpen] = useState(false);
    const dateFrom = date.split("-")[0]
    const dateTo = date.split("-")[1]
    return(
        <>
        <Accordion.Root type="single" className={style.accordion}>
            <Accordion.Item value="item-1" className={style.item}>
                <Accordion.Header className={style.header}>
                    <Accordion.Trigger 
                        onClick={() => setOpen(!open)} 
                        className={style.trigger}
                    >
                        <span>{goalName}</span>
                    </Accordion.Trigger>
                </Accordion.Header>
                    <Accordion.Content className={`${style.content} ${open ? style.show : ""}`}>
                    <div className={style.body}>
                        {stages.stages.map((item, key)=>{
                            return (
                                <MiniGoal 
                                title={item.name}
                                textBoxTitles={item.points}
                                date={item.date}
                                idBox={idBox}
                                key={key}/>
                            )

                        })}
                        
                    </div>
                    </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </>
    )
};
