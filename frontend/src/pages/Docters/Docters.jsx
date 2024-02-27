import React from 'react'
import DocList from '../../components/DocList'

const Docters = () => {

  return (
 <>
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
 </>

  )
}

export default Docters