import React, { useEffect, useState } from 'react'
import {doctors } from '../assets/data/doctors'
import DocCard from './DocCard'
import { useSelector } from 'react-redux';

const DocList = () => {
  const docters = useSelector((state) => state.docters.docters);    
  console.log(docters);

 

  return (
    <div>
     {docters? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ' >
        {docters.map((docter)=> <DocCard docter={docter} key={docter._id } />)}
    </div>: 
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ' >
        {doctors.map((docter)=> <DocCard docter={docter} key={docter.id } />)}
    </div>}
    </div>
  )
}

export default DocList