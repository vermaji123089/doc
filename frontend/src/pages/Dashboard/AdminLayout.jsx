import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import AdminDashBoard from "./Dashboard";
import Sidebar from "./Sidebar";
import User from "./User";
import DocListAdmin from "./DocListAdmin";

const AdminLayout = () => {
  
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user" element={<User />} />
        <Route path="/doclistadmin" element={<DocListAdmin />} />
        {/* <Route path="/appointment" element={<User />} /> */}

      </Routes>
    </>
  );
};

export default AdminLayout;