import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
const Contact = () => {
  // const navigate = useNavigate()
  
  // useEffect(()=>{
  //   if(!localStorage.getItem("token")){
  //     navigate('/login')
  //   }
  // },[])
  return (

    <div>
      <br />
      <br />
       <div className="max-w-6xl mx-auto px-4 pb-12 lg:grid lg:grid-cols-3 lg:gap-8">
  <div className="lg:col-span-2">
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400">We'll get back to you as soon as possible.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="first-name">First name</label>
          <input className="input w-full outline-none" id="first-name" placeholder="Enter your first name" />
        </div>
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="last-name">Last name</label>
          <input className="input w-full outline-none" id="last-name" placeholder="Enter your last name" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-semibold" htmlFor="email">Email</label>
        <input className="input w-full outline-none" id="email" placeholder="Enter your email" type="email" />
      </div>
      
      <div className="space-y-2">
        <label className="font-semibold" htmlFor="message">Message</label>
        <textarea className="input w-full outline-none min-h-[100px]" id="message" placeholder="Enter your message"></textarea>
      </div>
      
      <button className="button w-full border border-black rounded-sm">Send message</button>
    </div>
  </div>
  
  <div className="space-y-4">
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">Contact Information</h3>
        <p className="text-gray-500 dark:text-gray-400">Reach out to us directly.</p>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-bold">Email</h4>
        <p>info@example.com</p>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-bold">Phone</h4>
        <p>(123) 456-7890</p>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-bold">Address</h4>
        <p>123 Street Rd, City, Country, 12345</p>
      </div>
    </div>
    
    <div className="h-[300px] rounded-xl border" />
  </div>
</div>

    </div>
  )
}

export default Contact