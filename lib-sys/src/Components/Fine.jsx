import React from 'react'
import Finecomp from './Finecomp'
import Table from './Table'


export default function Fine(props) {
  return (
    <div>
      <Table />
      <Finecomp fineList={props} />
    </div>
  )
}