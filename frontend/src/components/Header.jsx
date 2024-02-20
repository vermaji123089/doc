import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo.png'
import userImage from '../assets/images/avatar-icon.png'
import { Link, NavLink } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import { UserContext } from '../routes/Router'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Header = () => {

  const user = useSelector((state) => state.auth.user);


  const localToken = localStorage.getItem("token");
  // useEffect(() => {
  //   axios.post("http://localhost:3001/api/getUser", { token: localToken })
  //     .then(result => {

  //       if (result.data.Status === "success") {
  //         setUserEmail(result.data.user.email);
  //         setUserName(result.data.user.name);
  //         setUsertoken(result.data.user.token);
  //         // console.log(result.data.user.email);
  //         // console.log(result.data.user.name);
  //         // Handle successful response here
  //       }
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('Error:', error);
  //     });

    
  // }, []); // Empty dependency array to run effect only once on component mount
  const handlelogout = ()=>{
    axios.post("http://localhost:3001/api/removeToken",{token:localToken}).then(result=>console.log(result)).catch(err=>err)
    localStorage.removeItem('token'); 
    window.location.reload()
  }
  // const {state,dispatch} = useContext(UserContext)
  const navLink = [
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
   
  ]
  const haederRef = useRef(null)
  const menuRef = useRef(null)

  const sitckyHeaer = () =>{
    window.addEventListener("scroll",()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        haederRef.current.classList.add('sticky__haeder')
      }else{
        haederRef.current.classList.remove('sticky__haeder')

      }
    })
  }
    useEffect(()=>{
    sitckyHeaer()

    return()=> window.removeEventListener('scroll', sitckyHeaer)
    })

  
    const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu') 
  return (

    
   <header className='header flex items-center ' ref={haederRef}>
    <div className="container">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* mernu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu} >
          <ul className="menu flex items-center gap-[2.7rem] ">
            {
              navLink.map((item, index)=>(
                 <li key={index}>
                  <NavLink to={item.path} className={navclass=>navclass.isActive? 'text-primaryColor text-[16px] leading-7 from-600 ' : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "} >{item.display}</NavLink>
                 </li>
              ))
            } 
            {user?.role == "admin" ? <li>
                  <NavLink to='/admin' className={navclass=>navclass.isActive? 'text-primaryColor text-[16px] leading-7 from-600 ' : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "} >Deshboard</NavLink>
                 </li>:""}
             </ul>
        </div>
<div className="flex items-center gap-5">


              <div className='hidden' >
                <Link to='/'>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer' >
                    <img src={userImage} alt="" className='w-full rounded-full ' />
                  </figure>
                </Link>
              </div>
              {localToken? <h1>{user?.name}</h1> : ""}
            {localToken?
             <Link to=''>
            <button className='bg-primaryColor py5 px-6 text-white font-[600] h-[44px] flex items-center cursor-pointer justify-center rounded-[50px] ' onClick={handlelogout} >Logout</button>
              </Link>
              : <Link to='/login'>
            <button className='bg-primaryColor py5 px-6 text-white font-[600] h-[44px] flex items-center cursor-pointer justify-center rounded-[50px] ' >Login</button>
              </Link> }
              <span className='md:hidden '  >
                <BiMenu className='w-6 h-6 cursor-pointer ' onClick={toggleMenu} />
              </span>
      </div>
      </div>
    </div>
       </header>
  )
}

export default Header