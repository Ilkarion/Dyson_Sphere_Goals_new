import style from "./page.module.scss"
import ThemedImage from "../components/theme-provider";
import Navigation from "../components/navigation/navigation";

export default function Home() {
  return (
    <>
      <div className={`${style.home}`}>
        <div className={style.bgTheme}>
          <ThemedImage />
        </div>
        <p className={style.motivation}>Jehovah is near to all those calling on him, To all who call on him in truth.</p>
        <Navigation mode="home"/>
      </div>

    </>
  );
}
