import axios from 'axios';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const DocListAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('dd');
    const [email,setEmail] = useState("dd")
    const [phone, setPhone] = useState('dd');
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
    
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    
  
    const handleSubmit = (e) => {
    e.preventDefault();

      // Handle submission logic here
      axios.post("http://localhost:3001/api/add/docter",{email,name,phone}).then(
        result=>{
            console.log(result);
        }
      ).catch(err=>console.log(err))
      // Close modal after submission if needed
      setShowModal(false);
    };
  
  return (
    <div>
        {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-111 " style={{    background: 'rgba(0, 0, 0, 0.286)'
}} >
        <div className="modal-content bg-white p-8 rounded-lg shadow-lg flex flex-col w-[40%] text-center    ">
        {/* <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div> */}
          <span className="close absolute top-[150px] right-[25%] p-4 cursor-pointer z-111 bg-white rounded-lg " onClick={handleCloseModal} ><IoMdClose/></span>
          <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="name"
            className="input mb-4 outline-none border py-2 m-[2px] text-center"
          />
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email"
            className="input mb-4 outline-none border py-2 m-[2px] text-center"
          />
          <input
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}

            placeholder="Mob Number"
            className="input mb-4 outline-none border py-2 m-[2px] text-center"
          />
          <button className="button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      
      )}
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
          

          <div className="">
            <div className="ventes">
              <div className="case">
                <div className="header-case">
                  <h2>Docter List</h2>
                  <button className="button" onClick={handleOpenModal}>
                    voir plus<span className="fa fa-arrow-right"></span>
                  </button>
                </div>
                <div className="body-case">
                  <div className="tableau">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>email</td>
                          <td>Phnne</td>
                          <td>specialization</td>
                          <td>Price</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <span className="status-produit color-one"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <span className="status-produit color-two"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-three"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-four"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                        <tr>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>
                            <span className="status-produit color-five"></span>
                           7894561230
                          </td>
                          <td>Otto</td>
                          <td>RS: 55</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

           
            
          </div>

          
        </main>
      </div>
    </div>
  )
}

export default DocListAdmin