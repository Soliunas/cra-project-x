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
        <div className={style.asideicons}>
          <GrDashboard size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Dashboard
          </a>
        </div>
        <div className={style.asideicons}>
          <LiaCalendar size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Appointments
          </a>
        </div>
        <div className={style.asideicons}>
          <LiaCalendar size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Calendar
          </a>
        </div>
        <div className={style.asideicons}>
          <BsPeople size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Patients
          </a>
        </div>
        <div className={style.asideicons}>
          <IoMdPerson size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Doctors
          </a>
        </div>
        <div className={style.asideicons}>
          <FaRegHospital size="20px" color="#aaa" />
          <a className={style.active} href=" ">
            Clinics
          </a>
        </div>
      </nav>
      <div className={style.asideicons}>
        <nav>
          <div className={style.asideicons}>
            <CiSettings size="20px" color="#aaa" />
            <a className={style.active} href=" ">
              Settings
            </a>
          </div>
          <div className={style.asideicons}>
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