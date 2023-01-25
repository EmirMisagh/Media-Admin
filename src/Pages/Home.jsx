import React from 'react'
import Chart from '../Components/Chart'
import Featuredinfo from '../Components/Featuredinfo'
import WidgetSm from '../Components/WidgetSm'
import WidgetLg from '../Components/WidgetLg'

export default function Home() {
  return (
    <div>
        <Featuredinfo />
        <Chart />
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
