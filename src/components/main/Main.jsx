import React from 'react';
import style from "./Main.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { LiaCalendarSolid } from "react-icons/lia";


export function Main({ appointmentsData }) {
  return (
    <main className={style.main}>
      <div className={style.mainheader}>
        <h1>Overview</h1>
        <div className={style.team}>
          <div className={style.team}>
            <IoMdPerson size="20px" color="#aaa" />
            <p>Md Rayhan Islam</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
          <div className={style.team}>
            <FaRegHospital />
            <p>Central Clinic, Dhaka</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
          <div className={style.team}>
            <LiaCalendarSolid />
            <p>Todays</p>
            <MdOutlineKeyboardArrowDown size="20px" color="#aaa" />
          </div>
        </div>
      </div>
    </main>
  )
};