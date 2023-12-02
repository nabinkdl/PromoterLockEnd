import React, { useState } from 'react'

function Row({SN,SYMBOL,AllotmentDate,NumberOfShares,PromoterShares,PromoterHolding,LockendDate}) {
  const [currentDate,setCurrentDate]= useState(new Date())
  var targetDate = new Date(LockendDate);
  // 2020-11-29	

  var timeDifference = targetDate.getTime() - currentDate.getTime();
  var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24))-1;

 

  return (

<>
{remainingDays>=0 ?  (      <tr>
          <th>{}</th> 
          <td>{SYMBOL}</td> 
          <td className='p-3 text-center'>{AllotmentDate}</td> 
          <td className='p-3 text-center'>{NumberOfShares}</td> 
          <td className='p-3 text-center'>{PromoterShares}</td> 
          <td className='p-3 text-center'>{PromoterHolding}</td> 
          <td className='p-3 text-center'>{LockendDate}</td> 
          <td className='p-3 text-center'>{remainingDays===-1?0:remainingDays}</td> 

          {/* <td>04</td> */}
        </tr>): null}


        </>   

  )
}

export default Row