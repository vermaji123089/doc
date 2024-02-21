import { useDispatch } from "react-redux";
import "./app.css";
import Layout from "./layouts/layout";
import { useEffect } from "react";
import { fetchUser } from "./redux/features/authSlice";
import { fetchAdmin } from "./redux/features/adminSlice";
import { fatchDocter } from "./redux/features/docterSlice";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchAdmin());
    dispatch(fatchDocter());
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
