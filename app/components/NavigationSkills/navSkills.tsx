import style from "../navigation/navig.module.scss"
import style2 from "./navSkills.module.css"
import DarkThemebtn from "../navigation/darkThemeBtn/darkThemebtn"
import LightThemebtn from "../navigation/lightThemeBtn/lightThemebtn"
import GuideBtn from "../navigation/guideBtn/guideBtn"
import Link from "next/link"
import ReturnHome from "../navigation/returnHomeBtn/returnHome"
import AddCard from "../navigation/AddNewCard/AddCard"


export default function navSkills() {
    return(
        <>
            <div className={`${style.navigation} ${style2.changePosition}`}>
                <div className={style.guideSkills}>
                    <div className={style2.rotateLogo}>
                        <Link href="/Home">
                            <ReturnHome />
                        </Link>
                    </div>
                    <div className={style2.rotateLogo}>
                        <Link href="/Home">
                            <GuideBtn />
                        </Link>  
                    </div>
                </div>

                <div className={style.guideSkills}>
                    <AddCard />
                </div>

                <div className={style.lightDarkOption}>
                    <div className={style2.rotateLogo}>
                        <DarkThemebtn />
                    </div>
                    <div className={style2.rotateLogo}>
                        <LightThemebtn />
                    </div>
                </div>
            </div>
        </>
    )
};
