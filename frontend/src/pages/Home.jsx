import React, { useEffect, useState } from "react";
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import faqImg from "../assets/images/faq-img.png";
import icon03 from "../assets/images/icon03.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import videoImg from "../assets/images/video-icon.png";
import featureImg from "../assets/images/feature-img.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About";
import ServiceLinst from "../components/ServiceLinst";
import DocList from "../components/DocList";
import FaqList from "../components/FaqList";
import Testimonial from "../components/Testimonial";
import axios from "axios";
import { useSelector } from "react-redux";
import ProducCard from "../components/ProducCard";

const Home = () => {
  const value = 20;
  const [userEmail, setUserEmail] = useState("");
  const [usertoken, setUsertoken] = useState("");
  const [userName, setUserName] = useState("");
  const localToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/getUser", { token: localToken })
      .then((result) => {
        if (result.data.Status === "success") {
          setUserEmail(result.data.user.email);
          setUserName(result.data.user.name);
          setUsertoken(result.data.user.token);
          // console.log(result.data.user.email);
          // console.log(result.data.user.name);
          // Handle successful response here
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <>
      {/* hero section */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
              {/* hereo containt */}
              <div>
                <div className="lg:w-[570px]  ">
                  {localToken ? (
                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                      We Help Patimes live a healthy, longer life. {userName}{" "}
                      {value}
                    </h1>
                  ) : (
                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                      We Help Patimes live a healthy, longer life.
                    </h1>
                  )}
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio eius, ad officiis ipsum placeat tempora facilis
                    explicabo voluptatum reprehenderit aperiam velit vero. Nulla
                    ullam cupiditate laboriosam vel quam debitis hic?
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* hero counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                      30+
                    </h2>
                    <span className="w-[100px] h2 bg-yellowColor rounded-full h-2 block mt-[-14px] "></span>
                    <p className="text_para">Year of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                      15+
                    </h2>
                    <span className="w-[100px] h2 bg-purpleColor rounded-full h-2 block mt-[-14px] "></span>
                    <p className="text_para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                      100%
                    </h2>
                    <span className="w-[100px] h2 bg-irisBlueColor rounded-full h-2 block mt-[-14px] "></span>
                    <p className="text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/* hereo containt end */}

              <div className=" flex gap-7 justify-end ">
                <div>
                  <img className="w-full" src={heroImg1} alt="" />
                </div>
                <div className="mt-[30px] ">
                  <img src={heroImg2} className="w-full mb-[30px] " alt="" />
                  <img src={heroImg3} className="w-full  " alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* hero section end */}

        <section className="container">
          <div className="lg:w-[470px] mx-auto  ">
            <h2 className="heading text-center ">
              Providing the best medical service
            </h2>
            <p className="text_para text-center">
              World-class care for ereryone. Our Healthy System Offers Unmatched
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor ">
                  World-class care for ereryone. Our Healthy System Offers
                  Unmatched
                </p>

                <Link
                  to="/docter"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor ">
                  World-class care for ereryone. Our Healthy System Offers
                  Unmatched
                </p>

                <Link
                  to="/docter"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor ">
                  World-class care for ereryone. Our Healthy System Offers
                  Unmatched
                </p>

                <Link
                  to="/docter"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* about  */}
        <About />

        {/* service */}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto ">
              <h2 className="heading text-center ">Our medical service</h2>
              <p className="text_para text-center ">
                World-class care for everyone. Our health System offers
                unmatched expert health care
              </p>
            </div>
            <ServiceLinst />
          </div>
        </section>
        {/* service end */}

        {/* features section start */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row ">
              <div className="xl:w-[670px] ">
                <h2 className="heading">
                  Get Virtual Treatment <br /> Anytime
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule the Appointment Directly.
                  </li>
                  <li className="text_para">
                    2. Search for your Physicians here, and contact their office
                  </li>
                  <li className="text_para">
                    3. View our Physicians who are accepting new patients, use
                    the online scheduliing tool to select an Appointment time.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn">Learn more</button>
                </Link>
              </div>
              {/* feature imnage */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                <img src={featureImg} className="w-3/4" alt="" />
                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3 ">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">
                        Tue, 24
                      </p>
                      <p className="text-10px leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400] ">
                        10:00 AM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor py-1 rounded px-[6px] lg:py-3 lg:px-[9px] ">
                      <img src={videoImg} alt="" />
                    </span>
                  </div>
                  <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:px-[10px] lg:py-[6px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full ">
                    Consultation
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">
                      Robert elen
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features section end  */}
        {/* our great docters */}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto ">
              <h2 className="heading text-center ">Our Great Docters</h2>
              <p className="text_para text-center ">
                World-class care for everyone. Our health System offers
                unmatched expert health care
              </p>
            </div>

            <DocList />
           
          </div>
        </section>

        {/* our great docters end  */}

        {/* FAQ Section */}

        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0 ">
              <div className=" w-1/2 hidden md:block ">
                <img src={faqImg} alt="" />
              </div>

              <div className="w-full md:w-1/2 ">
                <h2 className="heading">Most questio by our bloved patients</h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section end */}
        {/* testimonial section */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto ">
              <h2 className="heading text-center ">What our patients says</h2>
              <p className="text_para text-center ">
                World-class care for everyone. Our health System offers
                unmatched expert health care
              </p>
            </div>
            <Testimonial />
          </div>
        </section>
        {/* testimonial section end */}
      </>
    </>
  );
};

export default Home;
