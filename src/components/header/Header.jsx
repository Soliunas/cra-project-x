import logo from "../../img/mediwave.png";
import face from '../../img/topface.png'
import style from "./Header.module.css";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import { PiBellThin } from "react-icons/pi";


export function Header() {
  return (
    <header className={style.header}>
      <div className={style.leftside}>
        <img className={style.logo} src={logo} alt="MediWave" />
      </div>
      <nav className={style.navigation}>
        <a className={style.active} href=" ">
          Appointments
        </a>
      </nav>
      <div className={style.rightside}>
        <form className={style.search}>
          <input placeholder="Search..."/>
        </form>
        <PiBellThin size="20px" color="#aaa" />
        <LiaEnvelopeOpenSolid size="20px" color="#aaa" />
        <img className={style.logo} src={face} alt="face" />
      </div>
    </header>
  )
}