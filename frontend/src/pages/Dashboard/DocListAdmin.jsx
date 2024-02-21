import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const DocListAdmin = () => {
  const docters = useSelector((state) => state.docters.docters);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleImageChange = (e) => {
  //     setImage(e.target.files[0]); // Store the selected image file
  // };

  // const handleSubmitimg = (e)=>{
  //     console.log(image);
  //     const formdeta = new FormData()
  //      // Handle submission logic here
  //      formdeta.append("file",image)
  //   axios.post("http://localhost:3001/upload",formdeta).then(
  //     result=>{
  //         console.log(result);
  //     }
  //   ).catch(err=>console.log(err))
  //   // Close modal after submission if needed

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure all required variables are defined

      // Check if image exists
      if (!image) {
        throw new Error("Image is required");
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("about", about);
      formData.append("specialization", specialization);
      formData.append("price", price);
      formData.append("file", image);

      const res = await axios.post(
        "http://localhost:3001/api/add/doctor",
        formData
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
      );
      console.log(res.data);

      setShowModal(false);
    } catch (error) {
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
          <div className="modal-content bg-white p-8 rounded-lg shadow-lg flex flex-col w-[40%] text-center">
            <span
              className="close absolute top-[150px] right-[25%] p-4 cursor-pointer z-111 bg-white rounded-lg "
              onClick={handleCloseModal}
            >
              <IoMdClose />
            </span>
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <input type="text" placeholder="name" className="input" />
            <input type="email" placeholder="email" className="input" />
            <input type="number" placeholder="Mob Number" className="input" />
            {/* extra detail */}
            <input type="number" placeholder="Price" className="input" />
            <input type="text" placeholder="Specialization" className="input" />
            {/* <div className="flex"> */}
            <input
              type="file"
              accept="image/*"
              name="image"
              placeholder="Image"
              className="input mb-4 outline-none border py-2 m-[2px] text-center"
            />
            {/* <button className='input mb-4 outline-none  py-2 m-[2px] w-[20%] border-[5px]' onClick={handleSubmitimg} >upload</button> */}
            {/* </div> */}
            <textarea
              type="text"
              placeholder="About"
              className="input mb-4 outline-none border py-2 m-[2px] text-center"
            />
            {/* extra detail */}

            <button
              className="button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
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
                        </tr>
                      </thead>
                      <tbody>
                        {docters &&
                          docters.map((doc) => (
                            <tr key={docters._id}>
                              <td>{doc.name}</td>
                              <td>{doc.email}</td>
                              <td>
                                <span className="status-produit color-one"></span>
                                {doc.phone}
                              </td>
                              <td>{doc.specialization}</td>
                              <td>{doc.price}</td>
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
