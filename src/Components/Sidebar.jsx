import React, { useEffect } from 'react'
import { MdLineStyle, MdTimeline, MdTrendingUp, MdUpload, MdBarChart, MdMailOutline, MdDynamicFeed, MdDashboard } from "react-icons/md";
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import { BiFootball } from "react-icons/bi";
import { SiPremierleague } from "react-icons/si";
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineTeam, AiOutlineSearch } from "react-icons/ai";

import { BiDollar } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    useEffect(() => {
        const links = document.querySelectorAll('.sidebarListItem');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach(link => {
                    link.classList.remove('active')
                })
                const target = e.target;
                if (target.nodeName == 'STRONG' || target.nodeName == 'svg') {
                    target.parentNode.classList.add('active')
                }
                target.classList.add('active')
            })
        })
    })

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
                        <NavLink to='/betting'>
                            <li className="sidebarListItem">
                                <MdTimeline className='sidebarIcons' />
                                <strong>Betting</strong>
                            </li>
                        </NavLink>
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
                        <NavLink to='/newslist'>
                            <li className="sidebarListItem">
                                <FiMessageSquare className='sidebarIcons' />
                                <strong>News</strong>
                            </li>
                        </NavLink>

                        <NavLink to='/bettinglist'>
                            <li className="sidebarListItem">
                                <FiPackage className='sidebarIcons' />
                                <strong>Betting</strong>
                            </li>
                        </NavLink>
                        <NavLink to='/matchlist'>
                            <li className="sidebarListItem">
                                <BiFootball className='sidebarIcons' />
                                <strong>Matches</strong>
                            </li>
                        </NavLink>
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
                            <AiOutlineSearch className='sidebarIcons' />
                            <strong>Outdated saerch</strong>
                        </li>
                        <NavLink to='/leaguelist'>
                            <li className="sidebarListItem">
                                <SiPremierleague className='sidebarIcons' />
                                <strong>Leagues</strong>
                            </li>
                        </NavLink>
                        <NavLink to='/teamlist'>
                            <li className="sidebarListItem">
                                <AiOutlineTeam className='sidebarIcons' />
                                <strong>Teams</strong>
                            </li>
                        </NavLink>
                        <NavLink to='/catagorylist'>
                            <li className="sidebarListItem">
                                <MdDashboard className='sidebarIcons' />
                                <strong>Catagory</strong>
                            </li>
                        </NavLink>
                        <NavLink to='/upload'>
                            <li className="sidebarListItem">
                                <MdUpload className='sidebarIcons' />
                                <strong>Upload</strong>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}
