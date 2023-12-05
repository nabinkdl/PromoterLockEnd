import React, { useState } from 'react'

function Row({data,index}) {
  const [currentDate,setCurrentDate]= useState(new Date())
  var targetDate = new Date(data.LockendDate);

  var timeDifference = targetDate.getTime() - currentDate.getTime();
  var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24))-1;

 

  return (

<>
      <tr className='border-t-2 border-b-2 text-xs sm:text-base '>
          <th className='pl-1'>{index+1}</th> 
          <td className='p-3'>{data.SYMBOL}</td> 
          <td className='p-3 text-center'>{data.AllotmentDate}</td> 
          <td className='p-3 text-center'>{data.NumberOfShares}</td> 
          <td className='p-3 text-center'>{data.PromoterShares}</td> 
          <td className='p-3 text-center'>{data.PromoterHolding}</td> 
          <td className='p-3 text-center'>{data.LockendDate}</td> 
          <td className='p-3 text-center'>{remainingDays===-1?0:remainingDays}</td> 

          {/* <td>04</td> */}
        </tr>
   

        </>   

  )
}

export default Row