import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const DocClinic = () => {
    const docters = useSelector((state) => state.docters.docters);
 
  const [udateID, setUdateID] = useState();
  const handleOpenModal = () => {
    setShowModal(true);
  };


  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/doc/delete/${id}`);
      toast.success("Doctor Upadted Sucessfully");
      setTimeout(() => {
        window.location.reload("");
      }, 2000);
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };
  // edit
  const handleSubmitedit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await axios.put(
        `http://localhost:3001/api/update/doctor/${udateID}`,
        formData
      );
      toast.success("Doctor updated successfully");
      setShowModalN(false);
      setTimeout(() => {
        window.location.reload(); // Refresh the page or update the doctor list in place
      }, 2500);
      // Optionally, refresh the page or update the doctor list in place
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <div>
         <div className="content">
        <main>
          <div className="">
            <div className="ventes">
              <div className="case">
                <div className="header-case">
                  <h2>Docter List</h2>
                  {/* <button className="button" onClick={handleOpenModal}>
                    Add Docter<span className="fa fa-arrow-right"></span>
                  </button> */}
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
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {docters &&
                          docters.map((doc) => (
                            <tr key={doc._id}>
                              <td>{doc.name}</td>
                              <td>{doc.email}</td>
                              <td>
                                <span className="status-produit color-one"></span>
                                {doc.phone}
                              </td>
                              <td>{doc.specialization}</td>
                              <td>{doc.price}</td>

                              <td>
                                <button
                                  style={{ color: "red" }}
                                  onClick={() => handleDelete(doc._id)}
                                >
                                  delete
                                </button>
                                

                               
                              </td>
                            </tr>
                          ))}
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

export default DocClinic