import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { MdLanguage, MdSettings } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="logo">
        YourShop
      </div>
      <div className="notic">
        <a href='http://localhost:5000/'>
          <AiOutlineArrowLeft className='notic__icon' />
        </a>
        <IoNotificationsOutline className='notic__icon' />
        <MdLanguage className='notic__icon' />
        <MdSettings className='notic__icon' />
        <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
      </div>
    </div>
  )
}
