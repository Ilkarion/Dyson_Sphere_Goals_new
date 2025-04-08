import NavHome from "../NavigationHome/navHome"
import NavSkills from "../NavigationSkills/navSkills"


export default function navigation({mode}:{mode:string}) {
    return(
        <>
          {mode === "home" ? <NavHome /> :
           mode === "skills" ? <NavSkills /> : ""}
        </>
    )
};
