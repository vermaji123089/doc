import React from 'react'
import { useSelector } from 'react-redux';
import Datatable from "usereactable";
import Table from './Table';
const User = () => {
  const user = useSelector((state) => state.admin.users);

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

       {user? <main>
       
<Table user={user} />
          
        </main>
      :
      (
        <main>
       
          ematy
          
        </main>
      )
      }
      </div>
    </div>
  )
}

export default User