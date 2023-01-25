import React from 'react'
import { MdLineStyle, MdTimeline, MdTrendingUp, MdArrowDownward, MdBarChart, MdMailOutline, MdDynamicFeed } from "react-icons/md";
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import { BiDollar} from "react-icons/bi";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashbourd</h3>
                <ul className="sidebarList">
                    <NavLink to='/'>
                        <li className="sidebarListItem active">
                            <MdLineStyle className='sidebarIcons' />
                            <strong>Home</strong>
                        </li>
                    </NavLink>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcons' />
                        <strong>Analytics</strong>
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp className='sidebarIcons' />
                        <strong>Sales</strong>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <NavLink to='/Users'>
                        <li className="sidebarListItem">
                            <FiUser className='sidebarIcons' />
                            <strong>Users</strong>
                        </li>
                    </NavLink>
                    <li className="sidebarListItem">
                        <FiPackage className='sidebarIcons' />
                        <strong>Products</strong>
                    </li>
                    <li className="sidebarListItem">
                        <BiDollar className='sidebarIcons' />
                        <strong>Transactions</strong>
                    </li>
                    <li className="sidebarListItem">
                        <MdBarChart className='sidebarIcons' />
                        <strong>Reports</strong>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdMailOutline className='sidebarIcons' />
                        <strong>Mail</strong>
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcons' />
                        <strong>Feedback</strong>
                    </li>
                    <li className="sidebarListItem">
                        <FiMessageSquare className='sidebarIcons' />
                        <strong>Messages</strong>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdMailOutline className='sidebarIcons' />
                        <strong>Mail</strong>
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcons' />
                        <strong>Feedback</strong>
                    </li>
                    <li className="sidebarListItem">
                        <FiMessageSquare className='sidebarIcons' />
                        <strong>Messages</strong>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
