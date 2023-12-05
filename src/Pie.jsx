import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Pie({promoter}) {


  return (
    <div className=' w-30 lg:w-full'>

<PieChart
  data={[
    { title: 'Promoter', value: promoter, color: '#C13C37' },
    { title: 'Public', value:  100 - promoter, color: '#E38627' },
  ]}
  className=' '

  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
/>

    </div>
  )
}

export default Pie