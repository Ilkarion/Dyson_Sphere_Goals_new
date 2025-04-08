import * as  Checkbox  from "@radix-ui/react-checkbox"
import style from "./checkBox.module.scss"
import { useState } from "react"

export default function CheckBox({text, idBox}:{text:string, idBox:number}) {
    const [ checked, setChecked ] = useState(false)
    return(
        <>
            <div className={style.formCheckBox}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox.Root 
                    id={`${idBox}`}
                    className={style.checkBoxRoot}
                    onClick={()=>setChecked(!checked)}
                    >
                        <Checkbox.Indicator className={style.checkBoxIcon}>
                            <div className={style.checkBoxIcon}></div>
                        </Checkbox.Indicator> 
                    </Checkbox.Root>
                    <label htmlFor={`${idBox}`} className={style.label}>
                        {text}
                    </label>
                </div>
             </div>
        </>
    )
};
