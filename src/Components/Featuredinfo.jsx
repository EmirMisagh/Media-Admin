import React from 'react'
import {  MdArrowDownward, MdArrowUpward } from "react-icons/md";

export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className="featuredTitle">
                Revanue
            </span>
            <div className='featuredMoneyContainer'>
                <span className="featuredmoney">
                    $2.450
                </span>
                <span className="featuredRote">
                    -11.4 <MdArrowDownward className='featuredIcon nagative' />
                </span>
            </div>
            <span className='featuredSub'>
                Compared to last month
            </span>
        </div>
        <div className='featuredItem'>
            <span className="featuredTitle">
                Revanue
            </span>
            <div className='featuredMoneyContainer'>
                <span className="featuredmoney">
                    $2.450
                </span>
                <span className="featuredRote">
                    -11.4 <MdArrowDownward className='featuredIcon nagative' />
                </span>
            </div>
            <span className='featuredSub'>
                Compared to last month
            </span>
        </div>
        <div className='featuredItem'>
            <span className="featuredTitle">
                Revanue
            </span>
            <div className='featuredMoneyContainer'>
                <span className="featuredmoney">
                    $2.450
                </span>
                <span className="featuredRote">
                    +11.4 <MdArrowUpward className='featuredIcon ' />
                </span>
            </div>
            <span className='featuredSub'>
                Compared to last month
            </span>
        </div>
    </div>
  )
}
