import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://doctor-app-s401.onrender.com/api/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data.Status === "success") {
          const role = result.data.role;
          if (role === "admin") {
            navigate("/https://doc-y3r4.onrender.com/admin");
          } else if (role === "user") {
            navigate("/");
            console.log(result);
            console.log(result.data.token);
            console.log(result.data.role);
          }
          const token = result.data.token;
          localStorage.setItem("token", token); // Store the token in local storage
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
    // Add your form submission logic here
  };

  return (
    <>
      <div className="" style={{ height: "80vh" }}>
        <h1
          style={{ textAlign: "center", marginTop: "20px", fontSize: "25px" }}
        >
          Login
        </h1>
        <div style={styles.container}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                style={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label style={styles.label}>
              Password:
              <input
                type="password"
                style={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" style={styles.button}>
              Log In
            </button>
            <p>
              {"Don't"} have account ? <Link to="/signup"> Creat Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  form: {
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    margin: "10px 0",
  },
  input: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    marginBottom: "10px",
  },
  fileInput: {
    width: "100%",
    marginBottom: "10px",
  },
  avatarPreview: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Login;
