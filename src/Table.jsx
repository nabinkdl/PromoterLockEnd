import React, { useState , useEffect } from 'react';
import Row from './Row';
import lockend from './lockend';

function Table() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLockend = lockend.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  // const sortedDataAscending= filteredLockend.sort((a,b)=>a.SYMBOL.localeCompare(b.SYMBOL))
// Original array



  // Darkmode


   const [theme,setTheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):'light');
    const  handleTheme=()=>{
        if(theme==='light')
        {
          setTheme('dark')
        }
        else{
          setTheme('light')
          const html = document.querySelector('html');
          html.classList.remove('dark')
        }
  
      }
      useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme= localStorage.getItem('theme');
        const html = document.querySelector('html');
        html.classList.add(localTheme)
      },[theme])
      
////


const currentDate = new Date();

let newArray = filteredLockend.filter(item => {
  const lockendDate = new Date(item.LockendDate);
  const remainingDays = Math.ceil((lockendDate - currentDate) / (1000 * 60 * 60 * 24));
  return remainingDays > -1;
});

// Display the new array
console.log("New array with remaining days more than 0:", newArray);


return (
  <div className='bg-[#ffffff] dark:bg-slate-800 transition-all min-h-screen flex flex-col items-center py-5'>
    <div className=' md:absolute top-2 right-2 text-right mt-6 mr-6'>
      <button onClick={handleTheme} className='bg-[#1f1d0f] text-white p-2 rounded-md'>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
    <div className='  text-gray-600 mt-4 mb-6 mr-1 text-center'>
      <div className='dark:text-white transition-all p-5'>
        We disclaim responsibility for any inaccuracies in the data; this information is provided solely during learning purposes.
        <input
        type='text'
        placeholder='Search'
        className='m-auto bg-[#424242] dark:bg-slate-900 text-white w-full h-16 focus:outline-none px-5 text-2xl rounded-2xl mt-4 sm:mx-8'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      
    </div>
    <div className='bg-[#ffffff] dark:bg-slate-800 dark:text-cyan-50 transition-all rounded-md  overflow-x-auto w-full'>
      <table className="divide-dashed table-fixed w-full sm:text-base">
        <thead>
          <tr>
            <th className='p-0'>😄</th>
            <th className='text-xs lg:text-base'>Script</th>
            <th className='p-3 text-xs lg:text-base'>Allotment Date</th>
            <th className='p-3 hidden lg:table-cell'>Number Of Shares</th>
            <th className='p-3 hidden lg:table-cell'>Promoter Shares</th>
            <th className='p-3 text-xs lg:text-base'>Promoter Holding</th>
            <th className='p-3 text-xs lg:text-base'>Lockend Date</th>
            <th className='p-3 text-xs lg:text-base'>Remaining Days</th>
          </tr>
        </thead>
        <tbody>
          {newArray.map((data, index) => (
            <Row key={data.SN} data={data} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}


export default Table;
