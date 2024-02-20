import { useDispatch } from "react-redux";
import "./app.css";
import Layout from "./layouts/layout";
import { useEffect } from "react";
import { fetchUser } from "./redux/features/authSlice";
import { fetchAdmin } from "./redux/features/adminSlice";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchAdmin());
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
