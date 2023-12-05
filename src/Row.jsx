import React, { useState } from 'react'
import Pie from './Pie';
function Row({data,index}) {
  const [currentDate,setCurrentDate]= useState(new Date())
  var targetDate = new Date(data.LockendDate);

  var timeDifference = targetDate.getTime() - currentDate.getTime();
  var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24))-1;

  const [pieActive, setPieActive] = useState(false);

  function ActiveChart(){
    setPieActive(pre => !pre)
  }

  return (

<>

      <tr className='border-t-2 border-b-2'>
          <td className=' m-1 p-4 text-center text-sm sm:text-base '>{index+1}</td> 
          <td className='  text-center text-sm sm:text-base  '>{data.SYMBOL}</td> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.AllotmentDate}</td> 
          <td className='p-3 text-center hidden lg:table-cell'>{data.NumberOfShares}</td> 
          <td className='p-3 text-center hidden lg:table-cell'>{data.PromoterShares}</td> 
          <td className='p-3 text-center cursor-pointer  bg-gray-300 text-sm sm:text-base relative' onClick={ActiveChart}>  {pieActive? <div><Pie promoter={data.PromoterHolding}/></div> :data.PromoterHolding}</td> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.LockendDate}</td> 
          <td className='p-3 text-center'>{remainingDays===-1?0:remainingDays}</td> 

          {/* <td>04</td> */}
        </tr>

       
   

        </>   

  )
}

export default Row