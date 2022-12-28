import React from 'react'

export default class Table extends React.Component {
  render() {
    return (
      <div> <table className='table mb-0'>
         <thead>
          <tr>
            <th scope="col">BOOK ID</th>
            <th scope="col">BOOK Name</th>
            <th scope="col">Fine Amount</th>
            <th scope="col">Days Overdue</th>
          </tr>
        </thead>
        </table>
      </div>
    )
  }
}
