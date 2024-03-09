import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import AdminDashBoard from "./Dashboard";
import Sidebar from "./Sidebar";
import User from "./User";
import DocListAdmin from "./DocListAdmin";
import { useSelector } from "react-redux";
import Appointments from "./Appointments";
import DocClinic from "./DocClinic";

const AdminLayout = () => {
  const { user, isLoading } = useSelector((st) => st.auth);
  // console.log(user, isLoading);
  if (isLoading) {
    return <>Loading....</>;
  }

  if (!isLoading && user && user.role !== "admin") {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user" element={<User />} />
        <Route path="/doclistadmin" element={<DocListAdmin />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/docclinic" element={<DocClinic />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
