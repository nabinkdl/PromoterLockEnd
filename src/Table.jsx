import React from 'react'
import Row from './Row'
import lockend from './lockend'
function Table() {

   

  return (
    <div className=' h-auto w-full  flex  justify-center'>
      <div className='bg-[#141414] text-white  mt-32 mb-5 rounded-md'>
        <table className=" ">
          <thead>
            <tr>
              <th className='p-3' >😄</th>
              <th className='p-3'>
                Script
              </th>
              <th className='p-3'>Allotment Date</th>
              <th className='p-3'>Number Of Shares</th>
              <th className='p-3'>Promoter Shares</th>
              <th className='p-3' >Promoter Holding</th>
              <th className='p-3'>Lockend Date</th>
              {/* <th>Days left</th> */}
            </tr>
          </thead>
          <tbody>
            {lockend.map(
              ({
                SN,
                SYMBOL,
                AllotmentDate,
                NumberOfShares,
                PromoterShares,
                PromoterHolding,
                LockendDate,
              }) => {
                return <Row SYMBOL={SYMBOL}
                SN={SN}
                AllotmentDate={AllotmentDate}
                NumberOfShares={NumberOfShares}
                 PromoterShares={PromoterShares}
                 PromoterHolding={PromoterHolding}
                 LockendDate={LockendDate}
                
                />;
              }
            )}
          </tbody>
        
        </table>
        </div>
    </div>
  );
}

export default Table