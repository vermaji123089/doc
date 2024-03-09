import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DocListAdmin = () => {
  const docters = useSelector((state) => state.docters.docters);
  const [showModal, setShowModal] = useState(false);
  const [showModalN, setShowModalN] = useState(false);
  const [udateID, setUdateID] = useState();
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // sec modal
  const handleOpenModalN = (id) => {
    // console.log(id)
    setUdateID(id);
    setShowModalN(true);
  };

  const handleCloseModalN = () => {
    setShowModalN(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/add/doctor",
        formData
      );
      toast.success("Doctor addeded Sucessfully");
      // console.log(res.data);
      setShowModal(false);
      setTimeout(() => {
        window.location.href = "/admin/doclistadmin";
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      // console.log(`http://localhost:3001/api/doc/delete/${id}`)
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
      {showModal && (
        <div
          className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-111 "
          style={{ background: "rgba(0, 0, 0, 0.286)" }}
        >
          <form
            id="addDoctorForm"
            onSubmit={handleSubmit}
            className="modal-content bg-white p-8 rounded-lg shadow-lg flex flex-col w-[40%] text-center"
          >
            <span
              className="close absolute top-[150px] right-[25%] p-4 cursor-pointer z-111 bg-white rounded-lg "
              onClick={handleCloseModal}
            >
              <IoMdClose />
            </span>
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <div className="flex ">
              <input
                type="text"
                required
                name="name"
                placeholder="name"
                className="input w-[50%]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input w-[50%]"
              />
            </div>
            <div className="flex ">
              <input
                type="number"
                name="phone"
                required
                placeholder="Mob Number"
                className="input w-[50%]"
              />
              <input
                type="number"
                name="price"
                required
                placeholder="Price"
                className="input w-[50%]"
              />
            </div>
            <div className="flex ">
              <input
                type="text"
                name="specialization"
                required
                placeholder="Specialization"
                className=" w-[50%] input"
              />

              <input
                type="file"
                accept="image/*"
                name="file"
                required
                placeholder="Image"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <div className="flex ">
              <input
                type="number"
                name="totalRating"
                required
                placeholder="TotalRating like 5"
                className=" w-[50%] input"
              />

              <input
                type="number"
                name="experiences"
                required
                placeholder="Experiences in Years"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <div className="flex ">
              <input
                type="number"
                name="totalPatients"
                required
                placeholder="Total Patients"
                className=" w-[50%] input"
              />

              <input
                type="number"
                name="averageRating"
                required
                placeholder="Average Rating"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <div className="flex ">
              <textarea
                type="text"
                name="about"
                placeholder="About"
                required
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
              <textarea
                type="text"
                name="hospital"
                placeholder="Hospital Name"
                required
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <textarea
              type="text"
              name="qualifications"
              placeholder="Qualifications"
              required
              className="input mb-4 outline-none border py-2 m-[2px] text-center"
            />

            <button className="button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      )}
      {/* edit */}
      {showModalN && (
        <div
          className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-111 "
          style={{ background: "rgba(0, 0, 0, 0.286)" }}
        >
          <form
            id="addDoctorForm"
            onSubmit={handleSubmitedit}
            className="modal-content bg-white p-8 rounded-lg shadow-lg flex flex-col w-[40%] text-center"
          >
            <span
              className="close absolute top-[150px] right-[25%] p-4 cursor-pointer z-111 bg-white rounded-lg "
              onClick={handleCloseModalN}
            >
              <IoMdClose />
            </span>
            <h2 className="text-2xl font-bold mb-4">Edit</h2>
            {/* <div className="flex ">
              <input
                type="text"
                
                name="name"
                placeholder="name"
                className="input w-[50%]"
              />
              <input
                type="email"
                name="email"
                
                placeholder="email"
                className="input w-[50%]"
              />
            </div>
            <div className="flex ">
              <input
                type="number"
                name="phone"
                
                placeholder="Mob Number"
                className="input w-[50%]"
              />
              <input
                type="number"
                name="price"
                
                placeholder="Price"
                className="input w-[50%]"
              />
            </div> */}
            <div className="flex ">
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                className=" w-[50%] input"
              />

              <input
                type="file"
                accept="image/*"
                name="file"
                placeholder="Image"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            {/* <div className="flex ">
              <input
                type="number"
                name="totalRating"
                
                placeholder="TotalRating like 5"
                className=" w-[50%] input"
              />

              <input
                type="number"
                name="experiences"
                
                placeholder="Experiences in Years"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <div className="flex ">
              <input
                type="number"
                name="totalPatients"
                
                placeholder="Total Patients"
                className=" w-[50%] input"
              />

              <input
                type="number"
                name="averageRating"
                
                placeholder="Average Rating"
                className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
              />
            </div>
            <div className="flex ">

            <textarea
              type="text"
              name="about"
              placeholder="About"
              
              className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
            />
            <textarea
              type="text"
              name="hospital"
              placeholder="Hospital Name"
              
              className=" w-[50%] input mb-4 outline-none border py-2 m-[2px] text-center"
            />
            </div>
            <textarea
              type="text"
              name="qualifications"
              placeholder="Qualifications"
              
              className="input mb-4 outline-none border py-2 m-[2px] text-center"
            /> */}

            <button className="button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="content">
        <main>
          <div className="">
            <div className="ventes">
              <div className="case">
                <div className="header-case">
                  <h2>Docter List</h2>
                  <button className="button" onClick={handleOpenModal}>
                    Add Docter<span className="fa fa-arrow-right"></span>
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
                                {"  /"}

                                <button
                                  style={{ color: "green" }}
                                  onClick={() => handleOpenModalN(doc._id)}
                                >
                                  edit
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
  );
};

export default DocListAdmin;
