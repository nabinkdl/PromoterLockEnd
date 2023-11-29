import React from 'react'
import TableRow from './TableRow'
import lockend from './lockend'
function table(props) {
    const card = lockend.map( (item) => {
        return(
         <TableRow 
              key = {item.SN}            
              {...item}
         />)
    }
      )
    
  return (
    <>
    <section class="text-gray-600 body-font">
    <div class="container px-5 mt-14 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Promoter LockEnd Period</h1>
        {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
      </div>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto my-0">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">SCRIPT</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">AllotmentDate</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">LockEndDate</th>
              <th className="mx-10 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total Units</th>
              <th className="py-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Promoter Holding</th>
            </tr>
            
          </thead>
          
          <tbody>
               
          </tbody>
          
        </table>

      </div>
      {card}
    </div>
 
  </section>
  
  </>
  )
}

export default table