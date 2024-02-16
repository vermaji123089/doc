import {Link} from 'react-router-dom'
import React from 'react'
import doctorImg03 from "../assets/images/doctor-img03.png";
const ProducCard = ({docter}) => {

  const {id,name,specialization,avgRating,totalRating,photo,totalPatients,hospital} = docter

  return (
    <Link  className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer' to={`/docter/${id}`}>
        <img className='w-full' src={photo} alt="" />
        <div className='p-4 text-black/[0.9]' >
<h2 className='text-lg font-medium' >{name}</h2>
 <div className='flex items-center text-black/[0.5]' >
    <p className=' mr-2 text-lg font-semibold ' >$20.22</p>
    <p className=' text-base font-medium line-through ' >$25.22</p>
    <p className=' ml-auto text-base font-medium text-green-500 ' >20% off</p>
 </div>
        </div>
        </Link>
  )
}

export default ProducCard