import React from 'react'
import Table from './Table';


export default function Finecomp(props) {
  return (
    <div>
    <table className='table mb-0'>
    <thead>
     <tr>
       <th height='50' width="220" scope="col">{props.fine.book_id}</th>
       <th height='50' width="400" scope="col">{props.fine.title}</th>
       <th width="400" scope="col">{props.fine.amount}</th>
       <th scope="col">{props.fine.days_overdue}</th>
     </tr>
   </thead>
   </table>
 </div>
    );
  
        
      
   

}
