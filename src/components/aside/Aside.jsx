import style from "./Aside.module.css";
import { BsInfoCircle, BsPeople } from "react-icons/bs";
import { LiaCalendar } from "react-icons/lia";
import { FaRegHospital } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { GrDashboard } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";

export function Aside() {
  return (
    <aside className={style.header}>
      <nav>
        <div className={style.asideicon}>
          <GrDashboard size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Dashboard
          </a>
        </div>
        <div className={style.asideicon}>
          <LiaCalendar size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Appointments
          </a>
        </div>
        <div className={style.asideicon}>
          <LiaCalendar size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Calendar
          </a>
        </div>
        <div className={style.asideicon}>
          <BsPeople size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Patients
          </a>
        </div>
        <div className={style.asideicon}>
          <IoMdPerson size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Doctors
          </a>
        </div>
        <div className={style.asideicon}>
          <FaRegHospital size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Clinics
          </a>
        </div>
      </nav>
      <div className={style.asideicon}>
        <nav>
          <div className={style.asideicon}>
            <CiSettings size="20px" color="#aaa" />
            <a className={style.active} href=" ">
              Settings
            </a>
          </div>
          <div className={style.asideicon}>
            <BsInfoCircle size="20px" color="#aaa" />
            <a className={style.active} href=" ">
              Help
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
};