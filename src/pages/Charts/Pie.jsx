// import React from 'react'
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, Legend, PieSeries, Category, DataLabel } from '@syncfusion/ej2-react-charts'
// import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
// import { useStateContext } from '../../contexts/ContextProvider'
// import { Header } from '../../components'
// const Bar = () => {
//   const {currentMode} = useStateContext();
//   return (
//     <div>
//      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
//       <Header category="Bar" title="Gold Silver and Bronze Rates" />
//     <ChartComponent
//     id="pie-chart"
//     height='420px'
//     primaryXAxis={barPrimaryXAxis}
//     primaryYAxis={barPrimaryYAxis}
//     chartArea={{border:{width:0}}}
//     tooltip={{enable:true}}
//     background={currentMode==="Dark" ? "#33373E": "#fff"}
//     >
//       <Inject  services={[PieSeries]} />
//       <SeriesCollectionDirective>
//         {barCustomSeries.map((item,index) => 
//         <SeriesDirective key={index} {...item}/>)}
//       </SeriesCollectionDirective>
//     </ChartComponent>
//     </div>
//     </div>
//   )
// }

// export default Bar

import React from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, Inject, AccumulationSelection}
from "@syncfusion/ej2-react-charts";
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'
import { pieChartData} from "../../data/dummy";

const Pie = () => {
  const {currentMode} = useStateContext();
    return (
    <div>
     <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pie" title="Annual Expenditure" />
    <AccumulationChartComponent
    id="pie-chart"
    legendSettings={{ background: 'white' }}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject  services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationLegend, AccumulationSelection]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
        name="pie"
        dataSource={pieChartData}
        xName="x"
        yName="y"
        type="Pie"
        width="45%"
        height="80%"
        neckWidth="15%"
        gapRatio={0.03}
        explode
        emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
        dataLabel={{
        visible: true,
        position: 'Inside',
        name: 'text',}}
        />

      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
    </div>
  )
}
export default Pie

