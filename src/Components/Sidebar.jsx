import React from 'react'
import { MdLineStyle, MdTimeline, MdTrendingUp, MdArrowDownward } from "react-icons/md";

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
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp className='sidebarIcons' />
                        Home
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashbourd</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MdLineStyle className='sidebarIcons' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcons' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp className='sidebarIcons' />
                        Home
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashbourd</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MdLineStyle className='sidebarIcons' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcons' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp className='sidebarIcons' />
                        Home
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
