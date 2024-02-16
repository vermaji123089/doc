import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/authSlice";
// import { button } from "react-icons"

const Service = () => {
  // const [userEmail, setUserEmail] = useState("");
  // const [userName, setUserName] = useState("");

  // const user = useSelector((state) => state.auth.user);

  // console.log("User", user);

  // if (!user) {
  //   return;
  // }else{
  //   console.log(err);
  // }

  // useEffect(() => {
  //   const localToken = localStorage.getItem("token");
  //   axios.post("http://localhost:3001/api/getUser", { token: localToken })
  //     .then(result => {

  //       if (result.data.Status === "success") {
  //         setUserEmail(result.data.user.email);
  //         setUserName(result.data.user.name);
  //         console.log(result.data.user.email);
  //         console.log(result.data.user.name);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  return (
    <div>
      {/* <p>Email: {user?.email}</p>
      <p>Name: {user?.name}</p>
      Service */}

<br />
      <div className="grid gap-6">
      <div className="mx-auto max-w-6xl grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg ">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Emergency Care"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Emergency Care</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We provide 24/7 emergency care for patients with urgent medical conditions.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg border-gray-200">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Surgical Services"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Surgical Services</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our experienced surgeons perform a wide range of surgical procedures.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg border-gray-200">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Maternity Care"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Maternity Care</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We offer comprehensive care for expectant mothers and their babies.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg border-gray-200">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Pediatric Care"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Pediatric Care</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our pediatric specialists provide compassionate and family-centered care.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg border-gray-200">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Diagnostic Imaging"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Diagnostic Imaging</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our imaging services help diagnose and treat various medical conditions.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 border border-gray-200 rounded-lg border-gray-200">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <img
              alt="Rehabilitation Services"
              className="object-cover"
              height="225"
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Rehabilitation Services</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our team of therapists provides personalized rehabilitation programs.
              </p>
            </div>
            <button className="border-gray-200 border-gray-200" size="sm" variant="outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Service;
