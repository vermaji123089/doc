import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import doctorImg01 from "../assets/images/doctor-img01.png";
import doctorImg02 from "../assets/images/doctor-img02.png";
import doctorImg03 from "../assets/images/doctor-img03.png";
const ProductDetailsCraousle = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360] mx-auto sticky top-[50px] ' >
        <Carousel
        thumbWidth={60}
        className='productCarousel'
        infiniteLoop={false}
        showIndicators={false}
        showStatus={false}>
          <img src={doctorImg01} alt="" />
          <img src={doctorImg02} alt="" />
          <img src={doctorImg03} alt="" />
          {/* <img src={doctorImg01} alt="" />
          <img src={doctorImg01} alt="" /> */}
        
        </Carousel>
    </div>
  )
}

export default ProductDetailsCraousle