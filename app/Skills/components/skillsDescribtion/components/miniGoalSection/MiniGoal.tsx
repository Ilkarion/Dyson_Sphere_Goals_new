import style from "./miniGoal.module.scss"
import CheckBox from "../checkBox/CheckBox"


export default function MiniGoal({title, textBoxTitles, date, idBox}
    :
    {title:string, textBoxTitles:string[], date:string, idBox:number}) {

        const dateFrom = date.split("-")[0]
        const dateTo = date.split("-")[1]
    return(
        <>
            <p className={style.titleMiniGoal}>{title}</p>
            <div className={style.checkBoxGroup}>
                {textBoxTitles.map((name, id)=> { 
                    return <CheckBox text={name} idBox={idBox * 100 + id} key={id}/>})}
            </div>
            <p className={style.date}>
                <time dateTime={dateFrom}>{dateFrom}</time> - <time dateTime={dateTo}>{dateTo}</time>
            </p>
        </>
    )
};
