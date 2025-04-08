import style from "./guideBtn.module.scss"
import Image from "next/image"
import guideImg from "@/app/assets/guide.png"

export default function GuideBtn() {
    return (
        <Image src={guideImg} 
        alt="show guide"
        className={style.navigBtn}
        />        
    )

};
