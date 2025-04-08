import style from "./page.module.scss"
import Navigation from "../components/navigation/navigation"
import HomeBg from "./components/homeBg/HomeBg"
import MobileTimeLine from "./components/mobileTimeLine/MobileTimeLine"

export default function page() {
    return(
        <div className={style.alignElemts}>
            <HomeBg />
            <MobileTimeLine />
            <div className={style.alignNav}>
                <Navigation mode="skills"/>
            </div>
            <div id="creator-card-menu"></div>
        </div>
    )
};
