import style from "../navigation/navig.module.scss"
import Link from "next/link"
import SkillsBtn from "../navigation/skillsBtn/skillsBtn"
import GuideBtn from "../navigation/guideBtn/guideBtn"
import DarkThemebtn from "../navigation/darkThemeBtn/darkThemebtn"
import LightThemebtn from "../navigation/lightThemeBtn/lightThemebtn"



export default function navHome() {
    return(
        <>
            <div className={style.navigation}>
                <div className={style.guideSkills}>
                    <div>
                    <Link href="/Skills">
                        <SkillsBtn />
                    </Link>
                    </div>
                    <div>
                    <Link href="/Home">
                        <GuideBtn />
                    </Link>  
                    </div>
                </div>

                <div className={style.lightDarkOption}>
                    <div>
                        <DarkThemebtn />
                    </div>
                    <div>
                        <LightThemebtn />
                    </div>
                </div>
            </div>
        </>
    )
};
