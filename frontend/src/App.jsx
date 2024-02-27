import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import Layout from "./layouts/layout";
import { fetchAdmin } from "./redux/features/adminSlice";
import { fetchUser } from "./redux/features/authSlice";
import { fatchDocter } from "./redux/features/docterSlice";
import ScrollTop from "./utils/ScrollToTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchAdmin());
    dispatch(fatchDocter());
  }, []);
  return (
    <>
      <ScrollTop />
      <ToastContainer />
      <Layout />
    </>
  );
}

export default App;
