import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [number,setNUmber] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/newuser",{name, email,password,number})
    .then(result=>{
      navigate("/login")
      console.log(result);
    })
    .catch(err=>console.log(err));
    // Add your form submission logic here
  };

  return (
   <>
    <div className="" style={{ height:'80vh'}}  >
   <h1 style={{textAlign:'center', marginTop:'20px',fontSize:'25px'}} >SignUp</h1>
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Username:
          <input type="text" style={styles.input}  onChange={(e)=>setName(e.target.value)} />
        </label>
        <label style={styles.label}>
          email:
          <input type="email" style={styles.input}  onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" style={styles.input}  onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <label style={styles.label}>
          Mob:
          <input type="number" style={styles.input}  onChange={(e)=>setNUmber(e.target.value)} />
        </label>
        <button type="submit" style={styles.button}>
          Log In
        </button>
        <p>Already have an account ? <Link to='/login' > Login</Link></p>
      </form>
    </div>
    </div>
   </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  form: {
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  },
  fileInput: {
    width: '100%',
    marginBottom: '10px',
  },
  avatarPreview: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Signup;
