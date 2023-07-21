import React from 'react';
import style from "./Main.module.css";
import { Column } from "./Column";
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
            <IoMdPerson size="1rem" color="#aaa" />
            <p>Md Rayhan Islam</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
          <div className={style.team}>
            <FaRegHospital />
            <p>Central Clinic, Dhaka</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
          <div className={style.team}>
            <LiaCalendarSolid />
            <p>Todays</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
        </div>
      </div>
      <Column title="Appointments" />
      <Column title="Consultations" />
      <Column title="Cancelled" />
      <Column title="Urgent resolve" />
    </main>
  )
};