import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import AdminDashBoard from "./Dashboard";
import Sidebar from "./Sidebar";
import User from "./User";
import DocListAdmin from "./DocListAdmin";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const { user, isLoading } = useSelector((st) => st.auth);
  console.log(user, isLoading);
  if (isLoading) {
    return <>Loading....</>;
  }

  if (user?.role !== 'admin') {
    return <Navigate to={"/login"} />;
  }

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
