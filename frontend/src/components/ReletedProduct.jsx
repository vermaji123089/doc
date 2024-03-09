import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProducCard from './ProducCard';
import {doctors} from '../assets/data/doctors'
import { useSelector } from 'react-redux';
const ReletedProduct = () => {
 const responsive = {

    desktop:{
        breakpoint:{max:3000, min: 1024},
        items : 3,
    },
    
    tablet:{
        breakpoint:{max:1023, min: 464},
        items : 2,
    },
    
    mobile:{
        breakpoint:{max:767, min: 0},
        items : 1,
    },
 }
 const docters = useSelector((state) => state.docters.docters);    
// console.log(docters)
// console.log(doctors)
  return (
    <div className=' mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 ' >
        <div className='text-2xl font-bold mb-5  '  >
You Might also Like
        </div>
        <Carousel responsive={responsive}
        containerClass='-mx-[10px]'
        itemClass='px-[10px]'
        >
{
docters ?
docters.map((docter)=><ProducCard docter={docter} key={docter._id } />)  :
doctors.map((docter)=><ProducCard docter={docter} key={docter._id } />) }
  {/* {docters.map((docter)=> <DocCard docter={docter} key={docter._id } />)} */}
</Carousel>
    </div>
  )
}

export default ReletedProduct