'use client'
import style from "./skillProgress.module.scss" 

export default function SkillProgress({stage}:{stage:string}) {
    let inProgress = false
    if (/^In progress \d+%$/.test(stage)) {
        inProgress = true
    }
    return(
        <>
            <div 
            className={`${style.skillProgress} ${style.mobileSkillProgress}
            ${inProgress ? 
                style.inProgressBg : stage === "completed" ? 
                style.completedBg : stage === "unfinished" ? 
                style.unfinishedBg : stage === "not started" ?
                style.notStartedBg : ''}`}
            >
                <span className={`${style.progressTitle} ${style.mobileProgressTitle}`}>{stage}</span>
            </div>
        </>
    )
};
