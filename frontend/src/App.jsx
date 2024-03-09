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
  const localToken = localStorage.getItem("token");


  function removeTokenAfter24Hours() {
    // Calculate the delay for 24 hours in milliseconds
    const delayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  
    setTimeout(() => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      toast.success("Doctor addeded Sucessfully");

      console.log('Token removed from local storage after 24 hours');
    }, delayInMilliseconds);
  }
  
  // Call the function to remove the token after 24 hours
  removeTokenAfter24Hours();
  

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
