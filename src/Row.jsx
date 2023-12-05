import React, { useState } from 'react'

function Row({data,index}) {
  const [currentDate,setCurrentDate]= useState(new Date())
  var targetDate = new Date(data.LockendDate);

  var timeDifference = targetDate.getTime() - currentDate.getTime();
  var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24))-1;

 

  return (

<>
      <tr className='border-t-2 border-b-2'>
          <th className='p-3 text-center text-sm sm:text-base '>{index+1}</th> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.SYMBOL}</td> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.AllotmentDate}</td> 
          <td className='p-3 text-center hidden lg:table-cell'>{data.NumberOfShares}</td> 
          <td className='p-3 text-center hidden lg:table-cell'>{data.PromoterShares}</td> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.PromoterHolding}</td> 
          <td className='p-3 text-center text-sm sm:text-base'>{data.LockendDate}</td> 
          <td className='p-3 text-center'>{remainingDays===-1?0:remainingDays}</td> 

          {/* <td>04</td> */}
        </tr>
   

        </>   

  )
}

export default Row