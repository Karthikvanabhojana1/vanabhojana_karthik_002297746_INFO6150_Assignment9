import React, { useState } from 'react';
import './Login.css'
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("login1")
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);

      const data = await response.json();

      if (data.success) {
        console.log("Sucess");
        alert('Log in Sucessful');
        
        onLogin(data.user);
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
                      console.log(error);

      console.error('Error:', error);
      alert('An error occurred while trying to log in.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;