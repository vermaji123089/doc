import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import doctorImg01 from "../assets/images/doctor-img01.png";
import doctorImg02 from "../assets/images/doctor-img02.png";
import doctorImg03 from "../assets/images/doctor-img03.png";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const ProductDetailsCraousle = () => {
  const { id } = useParams();     
  const docters = useSelector((state) => state.docters.docters);    
  const [doctor, setDoctor] = useState(null);
  // const [doctorN, setDoctorN] = useState(null);
 
  useEffect(() => {
    
    
    // Find the doctor with matching id
    // console.log(docters);
    if(docters){

      const foundDoctor = docters.find(doctor => doctor._id === id);
      setDoctor(foundDoctor);
      // console.log(foundDoctor)
    }else{

      // const foundDoctor2 = doctors.find(doctor => doctor.id === id);
      // setDoctorN(foundDoctor2);
    }
  }, [id,docters]);

  // console.log(doctor)
  return (
    <div className="text-white text-[20px] w-full max-w-[1360] mx-auto sticky top-[50px] ">
      <Carousel
        thumbWidth={60}
        className="productCarousel"
        infiniteLoop={false}
        showIndicators={false}
        showStatus={false}
      >
        {doctor ? (
          <div key={doctor.id}>
            <img
              src={`https://doctor-app-s401.onrender.com/img/${doctor.image}`}
              alt=""
            />
          </div>
        ) : (
          <>
            <img src={doctorImg01} alt="" />
            <img src={doctorImg02} alt="" />
            <img src={doctorImg03} alt="" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCraousle