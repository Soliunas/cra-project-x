import React from 'react';
import style from "./Main.module.css";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { LiaCalendar } from "react-icons/lia";


export function Main({ appointmentsData }) {
  return (
    <main className={style.main}>
      <div className={style.mainheader}>
        <h1>Overview</h1>
        <div className={style.people}>
          <div className={style.people}>
            <IoMdPersonAdd size="20px" color="#aaa" />
            <p>Md Rayhan Islam</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
          <div className={style.people}>
            <FaRegHospital />
            <p>Central Clinic, Dhaka</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
          <div className={style.people}>
            <LiaCalendar />
            <p>Todays</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
        </div>
      </div>
    </main>
  )
};