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

        <main>
          

          {/* <div className="">
            <div className="ventes">
              <div className="case">
                <div className="header-case">
                  <h2>User's</h2>
                  <button className="button">
                    voir plus<span className="fa fa-arrow-right"></span>
                  </button>
                </div>
                <div className="body-case">
                  <div className="tableau">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Number</td>
                          <td>Email</td>
                          <td>Role</td>
                        </tr>
                      </thead>
                      {user && user.map(user => (
  <tbody key={user._id}>
    <tr>
      <td>{user.name}</td>
      <td>{user.number}</td>
      <td>
        <span className="status-produit color-one"></span>
        {user.email}
      </td>
      <td>
        <span className="status-produit color-one"></span>
        {user.role}
      </td>
    </tr>
  </tbody>
))}
     
                    </table>
                  </div>
                </div>
              </div>
            </div>

           
            
          </div> */}
<Table user={user} />
          
        </main>
      </div>
    </div>
  )
}

export default User