import React, { useState } from 'react';
import Row from './Row';
import lockend from './lockend';

function Table() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLockend = lockend.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className='bg-[#d5d5d5] h-auto w-full flex justify-center'>
      <div className='relative text-gray-600'>
        <input
          type='text'
          placeholder='Search'
          className='bg-[#1f1d0f] text-white items-center w-[890px] h-16 focus:outline-none flex-auto absolute top-9 p-10 text-2xl rounded-2xl'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='bg-[#1f1d0f] text-white mt-32 mb-5 rounded-md p-4'>
        <table className="divide-dashed">
          <thead>
            <tr>
              <th className='p-3'>😄</th>
              <th className='p-3'>Script</th>
              <th className='p-3'>Allotment Date</th>
              <th className='p-3'>Number Of Shares</th>
              <th className='p-3'>Promoter Shares</th>
              <th className='p-3'>Promoter Holding</th>
              <th className='p-3'>Lockend Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredLockend.map((data) => {
              return <Row key={data.SN} {...data} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
