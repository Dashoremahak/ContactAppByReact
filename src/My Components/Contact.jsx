import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";

const Contact = ({name , number}) => {
   
  return (
    <div className='text-amber-900 font-semibold'>
        <h1>{name}</h1>
        <h1><MdOutlineLocalPhone />{number}</h1>
        <button>delete</button>
    </div>
  )
}

export default Contact