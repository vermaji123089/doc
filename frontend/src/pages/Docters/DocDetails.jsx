import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wraper from "../../components/Wraper";
import ProductDetailsCraousle from "../../components/ProductDetailsCraousle";
import ReletedProduct from "../../components/ReletedProduct";
import { doctors } from "../../assets/data/doctors";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

// import ReletedProduct from '@/components/ReletedProduct'
const ProductDetails = () => {
  const [doctor, setDoctor] = useState(null);
  const [doctorN, setDoctorN] = useState(null);
  const [docApp, setDocApp] = useState(false);
  const [appID, setAppId] = useState(false);
  const docters = useSelector((state) => state.docters.docters);
  const user = useSelector((state) => state.auth.user);

  // console.log(user);

  const Pemail = user?.email;
  const Pname = user?.name;
  const pnumber = user?.number;

  const { id } = useParams();
  const localToken = localStorage.getItem("token");


  // console.log(id)
  const handleMakeAppointment = () => {
    const appointmentData = {
      email: Pemail,
      name: Pname,
      number: pnumber,
    };

    try {
      axios
        .put(
          `https://doctor-app-s401.onrender.com/api/doctor/appointments/${id}`,
          appointmentData
        )
        .then((result) => {
          // console.log(result)
          toast.success("Appointment is Fixed");
          setTimeout(() => {
            // window.location.href = `http://localhost:5173/docter/${id}`;
            window.location.href = `https://doc-y3r4.onrender.com/docter/${id}`;
          }, 2000);
        });
    } catch (error) {}
  };

  useEffect(() => {
    const checkAppint = () => {
      // console.log("id:", id); // Log the id variable

      axios
        .get(`https://doctor-app-s401.onrender.com/api/get/appointments/${id}`)
        .then((result) => {
          const appointments = result.data.appointments;
          let appointmentId = null;

          appointments.forEach((appointment) => {
            if (appointment.user.email === Pemail) {
              appointmentId = appointment._id;
            }
          });
          setAppId(appointmentId);
          if (appointmentId) {
            // console.log(appointmentId)
            setDocApp(false);
            console.log(
              `Your email is associated with the appointment ID: ${appointmentId}`
            );
          } else {
            setDocApp(true);
            console.log("Your email is not present in the list of users.");
          }
        })
        .catch((err) => console.error(err));
    };

    if (localToken) {
      // console.log("ok");
      // console.log(localToken)
    } else {
      window.location.href = "/";
    }

    // Find the doctor with matching id
    if (docters) {
      const foundDoctor = docters.find((doctor) => doctor._id === id);
      setDoctor(foundDoctor);
    } else {
      const foundDoctor2 = doctors.find((doctor) => doctor.id === id);
      setDoctorN(foundDoctor2);
    }
    checkAppint();
  }, [id, doctors, docters]);

  // delete Appoint ment

  // console.log(appID)
  const handleCancelAppointment = () => {
    try {
      axios
        .delete(
          `https://doctor-app-s401.onrender.com/api/delete/appointment/${appID}`
        )
        .then((result) => {
          // console.log(result)
          toast.success("Appointment is Canceled");
          setTimeout(() => {
            window.location.href = `https://doc-y3r4.onrender.com/docter/${id}`;
          }, 2000);
        });
    } catch (error) {}
  };
// 
  return (
    <div className="w-full md:py-20">
      <Wraper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
          {/* left coumn */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {" "}
            <ProductDetailsCraousle />{" "}
          </div>
          {/* left coumn */}

          {/* right coumn */}

          {docters ? (
            <div className="flex-[1] py-3">
              {doctor && (
                <>
                  <div className="text-[34px] font-semibold mb-2">
                    {doctor.name}
                  </div>
                  <div className="text-lg font-semibold mb-5">
                    Specialization : {doctor.specialization}
                  </div>
                  <div className="text-lg font-semibold">
                    Rating : {doctor.totalRating}
                  </div>
                  <div className="text-md font-medium text-black/[0.5]">
                    AvgRating: {doctor.averageRating}
                  </div>
                  <div className="text-md font-medium text-black/[0.5] mb-20">
                    (Also include all application detail)
                  </div>
                  <div className="mb-10">
                    <div className="flex justify-between mb-2">
                      <div className="text-md font-semibold">
                        Total Patients: {doctor.totalPatients}
                      </div>
                      <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                        Timing: 9:00 AM to 5:00 PM
                      </div>
                    </div>
                    <div className="text-red-600 mt-1">
                      Hospital Name: {doctor.hospital}
                    </div>
                  </div>
                  <div className="flex items-center text-black/[0.5]">
                    <p className=" mr-2 text-lg font-semibold ">
                      $ {doctor.price}
                    </p>
                    <p className=" text-base font-medium line-through ">
                      $25.22
                    </p>
                    <p className=" ml-auto text-base font-medium text-green-500 ">
                      20% off
                    </p>
                  </div>
                  {docApp ? (
                    <button
                      onClick={handleMakeAppointment}
                      className="hover:opacity-70 w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3"
                    >
                      Make Appointment
                    </button>
                  ) : (
                    <button
                      onClick={handleCancelAppointment}
                      className="hover:opacity-70 w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3"
                    >
                      Cancel Appointment
                    </button>
                  )}
                  <button className="hover:opacity-70 w-full py-4 rounded-full bg-white text-black border border-black text-lg font-medium transition-transform active:scale-95 mb-3 flex items-center mb-10 gap-2 justify-center hover:opacity-70">
                    Whishlist <IoMdHeartEmpty size={20} />
                  </button>
                  <div className="">
                    <div className="text-lg font-bold mb-5">Product Detail</div>
                    <div className="text-md mb-5">{doctor.about}</div>
                    <div className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta mollitia ullam dolorem reiciendis beatae
                      reprehenderit cumque cupiditate optio voluptatem et hic
                      numquam enim necessitatibus, quidem aliquid corporis at
                      accusantium nam.
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex-[1] py-3">
              {doctorN && (
                <>
                  <div className="text-[34px] font-semibold mb-2">
                    {doctorN.name}
                  </div>
                  <div className="text-lg font-semibold mb-5">
                    Specialization : {doctorN.specialization}
                  </div>
                  <div className="text-lg font-semibold">
                    Rating : {doctorN.totalRating}
                  </div>
                  <div className="text-md font-medium text-black/[0.5]">
                    AvgRating: {doctorN.avgRating}
                  </div>
                  <div className="text-md font-medium text-black/[0.5] mb-20">
                    (Also include all application detail)
                  </div>
                  <div className="mb-10">
                    <div className="flex justify-between mb-2">
                      <div className="text-md font-semibold">
                        Total Patients: {doctorN.totalPatients}
                      </div>
                      <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                        Select Guid
                      </div>
                    </div>
                    <div className="text-red-600 mt-1">
                      Hospital Name: {doctorN.hospital}
                    </div>
                  </div>
                  <button className="hover:opacity-70 w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3">
                    Make Appointment
                  </button>
                  <button className="hover:opacity-70 w-full py-4 rounded-full bg-white text-black border border-black text-lg font-medium transition-transform active:scale-95 mb-3 flex items-center mb-10 gap-2 justify-center hover:opacity-70">
                    Whishlist <IoMdHeartEmpty size={20} />
                  </button>
                  <div className="">
                    <div className="text-lg font-bold mb-5">Product Detail</div>
                    <div className="text-md mb-5">{doctorN.about}</div>
                    <div className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta mollitia ullam dolorem reiciendis beatae
                      reprehenderit cumque cupiditate optio voluptatem et hic
                      numquam enim necessitatibus, quidem aliquid corporis at
                      accusantium nam.
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {/* right coumn */}
        </div>
        <ReletedProduct />
      </Wraper>
    </div>
  );
};

export default ProductDetails;
