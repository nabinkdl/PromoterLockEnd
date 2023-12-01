import React from 'react'

function Row({SN,SYMBOL,AllotmentDate,NumberOfShares,PromoterShares,PromoterHolding,LockendDate}) {


  return (

<>

      <tr>
          <th>{SN}</th> 
          <td>{SYMBOL}</td> 
          <td>{AllotmentDate}</td> 
          <td>{NumberOfShares}</td> 
          <td>{PromoterShares}</td> 
          <td>{PromoterHolding}</td> 
          <td>{LockendDate}</td> 
          {/* <td>04</td> */}
        </tr>

        </>   

  )
}

export default Row