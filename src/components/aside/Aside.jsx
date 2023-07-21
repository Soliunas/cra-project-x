import style from "./Aside.module.css";
import { BsCalendarPlus, BsInfoCircle, BsPeopleFill } from "react-icons/bs"
import { LiaCalendarSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { FaRegHospital } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"
import { GrDashboard } from "react-icons/gr"

export function Aside() {
  return (
    <aside className={style.header}>
      <nav>
        <div className={style.asideicon}>
          <GrDashboard size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Dashboard
          </a>
        </div>
        <div className={style.asideicon}>
          <BsCalendarPlus size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Appointments
          </a>
        </div>
        <div className={style.asideicon}>
          <LiaCalendarSolid size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Calendar
          </a>
        </div>
        <div className={style.asideicon}>
          <BsPeopleFill size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Patients
          </a>
        </div>
        <div className={style.asideicon}>
          <IoMdPerson size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Doctors
          </a>
        </div>
        <div className={style.asideicon}>
          <FaRegHospital size="1rem" color="#aaa" />
          <a className={style.active} href="/">
            Clinics
          </a>
        </div>
      </nav>
      <div className={style.asideicon}>
        <nav>
          <div className={style.asideicon}>
            <CiSettings size="1rem" color="#aaa" />
            <a className={style.active} href="/">
              Settings
            </a>
          </div>
          <div className={style.asideicon}>
            <BsInfoCircle size="1rem" color="#aaa" />
            <a className={style.active} href="/">
              Help
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
};