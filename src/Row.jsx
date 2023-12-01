import React from 'react'

function Row(props) {

 console.log(props)

  return (

<>

      <tr>
          <th>{props.SN}</th> 
          <td>{props.SYMBOL}</td> 
          <td>{props.AllotmentDate}</td> 
          <td>{props.NumberOfShares}</td> 
          <td>{props.PromoterShares}</td> 
          <td>{props.PromoterHolding}</td> 
          <td>{props.LockendDate}</td>
          {/* <td>04</td> */}
        </tr>

        </>   

  )
}

export default Row