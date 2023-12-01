import React from 'react'

function Row({SN,SYMBOL,AllotmentDate,NumberOfShares,PromoterShares,PromoterHolding,LockendDate}) {


  return (

<>

      <tr>
          <th>{SN}</th> 
          <td>{SYMBOL}</td> 
          <td className='p-3 text-center'>{NumberOfShares}</td> 
          <td className='p-3 text-center'>{PromoterShares}</td> 
          <td className='p-3 text-center'>{AllotmentDate}</td> 
          <td className='p-3 text-center'>{PromoterHolding}</td> 
          <td className='p-3 text-center'>{LockendDate}</td> 
          {/* <td>04</td> */}
        </tr>

        </>   

  )
}

export default Row