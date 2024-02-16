import { useDispatch } from "react-redux";
import "./app.css";
import Layout from "./layouts/layout";
import { useEffect } from "react";
import { fetchUser } from "./redux/features/authSlice";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
