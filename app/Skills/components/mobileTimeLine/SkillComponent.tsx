import SkillDescribtion from "../skillsDescribtion/SkillDescribtion"
import SkillProgress from "../skillsProgress/SkillProgress"
import style from "./mobileTimeLine.module.scss"


interface stages {
    stages: {
        date: string;
        name: string;
        points: string[];
    }[];
}

export default function SkillComponent(
    {mode, idBox, goalName, stages, date}:
    {mode:string, idBox:number, goalName:string, stages:stages, date:string}) {
    return(
        <>
            <div className={style.skillComponent}>
                <SkillDescribtion idBox={idBox} goalName={goalName} stages={stages} date={date}/>
                <div className={style.connectionElement}>
                    <div className={style.connectionCircle}>
                    </div>
                    <div className={style.connectionLine}></div>
                </div>
                <SkillProgress stage={mode}/>
            </div>
        </>
    )
};
