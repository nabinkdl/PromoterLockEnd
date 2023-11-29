import React from 'react'
function TableRow(props) {

  return (
    <div className="container mx-auto">
    <div  className="lg:w-2/3 w-full mx-auto overflow-auto"> 
    <table className="table-auto w-full text-left">
    <tr>
    <td className="w-18px">{props.SYMBOL}</td>
    <td className="px-4 w-18px  text-right">{props.AllotmentDate}</td>
    <td className="px-4 py-3 text-center">{props.LockendDate}</td>
    <td className="px-4 py-3">{props.NumberOfShares}</td>
    <td className="px-4 py-3">{props.PromoterHolding}%</td>
    </tr>
  
  </table>
  </div>
  </div>
  )
}

export default TableRow