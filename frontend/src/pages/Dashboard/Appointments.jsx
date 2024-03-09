import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DocRAwtable from './DocRAwtable';
import Table from './Table';
import DocAppTable from './DocAppTable';

const Appointments = () => {

  const user = useSelector((state) => state.auth.user);
  const docters = useSelector((state) => state.docters.docters);    

  const navigate = useNavigate()
  useEffect(() => {
    if (user?.role === "admin") {
      console.log("User is an admin");
    } else if (user?.role === "user") {
      navigate('');
    }else if ( user?.role === "") {
      navigate('');
    }
  }, [user]);
  return (
    <div>
    <div className="content">
   {/* <header className="headerD">
     <p>
       <label for="menu">
         <span className="fa fa-bars">
           <GiHamburgerMenu />
         </span>
       </label>
       <span className="accueil"></span>
     </p>
   </header> */}

 { docters? (<main>
     

<DocAppTable docters={docters} /> 
   </main>)
  : 
  (<main>
     

    ss
       </main>)
      
  }
 </div>
</div>
  )
}

export default Appointments