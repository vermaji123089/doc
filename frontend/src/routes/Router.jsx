import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import AdminLayout from "../pages/Dashboard/AdminLayout.jsx";
import Dashbord from "../pages/Dashboard/Dashboard.jsx";
import DocDetails from "../pages/Docters/DocDetails";
import Docters from "../pages/Docters/Docters";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Service from "../pages/Service";
import Signup from "../pages/Signup";
// import HomeAdmin from '../pages/dashboard/HomeAdmin.jsx'
// import { inicialState, reducer } from '../Reducer/Usereducer'
export const UserContext = createContext();
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docter/:id" element={<DocDetails />} />
      {/* <Route path='/docter/:id' element={<DocDetails />} /> */}
      <Route path="/docters/" element={<Docters />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<Service />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
    // </UserContext.Provider>
  );
};

export default Router;
