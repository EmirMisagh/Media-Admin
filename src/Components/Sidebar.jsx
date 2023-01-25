import React from 'react'
import { MdLineStyle, MdTimeline, MdTrendingUp, MdArrowDownward, MdBarChart, MdMailOutline, MdDynamicFeed } from "react-icons/md";
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import { BiDollar} from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashbourd</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MdLineStyle className='sidebarIcons' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcons' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp className='sidebarIcons' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FiUser className='sidebarIcons' />
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <FiPackage className='sidebarIcons' />
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <BiDollar className='sidebarIcons' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <MdBarChart className='sidebarIcons' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdMailOutline className='sidebarIcons' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcons' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <FiMessageSquare className='sidebarIcons' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdMailOutline className='sidebarIcons' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcons' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <FiMessageSquare className='sidebarIcons' />
                        Messages
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
