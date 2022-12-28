import React from 'react'
import Finecomp from './Finecomp'


export default function Fineslist(props) {
   
  return (
    props.fineList.map(
   (fine,i)=>{
        return <Finecomp fine={fine} key={i}/>
  
   }
    )
  )
}

