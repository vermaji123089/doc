import React from 'react'
import  Logo from '../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub ,  AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {


  const socialLink = [
    {
      path:'/',
       icon:<AiFillYoutube className='group-hover:text-white w-4 h-5' />,
    },
    {
      path:'/',
      icon:<AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
      path:'/',
      icon:<AiFillInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
      path:'/',
      icon:<AiFillLinkedin className='group-hover:text-white w-4 h-5' />,
    },
   
  ];
  const quickLink = [
    {
      path:'/',
       display:'Home',
    },
    {
      path:'/docters',
       display:'Find A docter',
    },
    {
      path:'/service',
       display:'Service',
    },
    {
      path:'/contact',
       display:'Contact',
    },
   
  ];
  const quickLink2 = [
    {
      path:'/',
       display:'find a docter',
    },
    {
      path:'/',
       display:'Request an Appointment',
    },
    {
      path:'/',
       display:'Find location',
    },
    {
      path:'/',
       display:'Get a Opinion',
    },
   
  ];
  const quickLink3 = [
    {
      path:'/',
       display:'Donate',
    },
    {
      path:'/',
       display:'Contact us',
    },
   
   
  ];

   const year = new Date().getFullYear()

  return (
  <footer className=' pb-16 pt-10 '>
    <div className="container">
      <div className=" flex justify-between md:flex-row flex-col md:flex-wrap gap-[30px] ">
    <div>
      <img src={Logo} alt="" />
      <p className=' text-[16px] leading-7 font-[400] text-textColor mt-4 ' >Copyright {year} developed by Mohit verma All right reserved</p>
      <div className=" flex items-center gap-3 mt-4 ">
        {socialLink.map((item,index)=>(
          <Link to={item.path} key={index} className=' w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none ' >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>

          <div>
            <h2 className='text-[20px] leading-[30px]  font-[700]  mb-6 text-headingColor ' >Quick Links </h2>
            <ul>
              {quickLink.map((item, index)=><li key={index} className='mb-4' ><Link to={item.path} className=' text-[16px] leading-7 font-[400] text-textColor ' >{item.display}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px]  font-[700]  mb-6 text-headingColor ' >Quick Links </h2>
            <ul>
              {quickLink2.map((item, index)=><li key={index} className='mb-4' ><Link to={item.path} className=' text-[16px] leading-7 font-[400] text-textColor ' >{item.display}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px]  font-[700]  mb-6 text-headingColor ' >Quick Links </h2>
            <ul>
              {quickLink3.map((item, index)=><li key={index} className='mb-4' ><Link to={item.path} className=' text-[16px] leading-7 font-[400] text-textColor ' >{item.display}</Link></li>)}
            </ul>
          </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer