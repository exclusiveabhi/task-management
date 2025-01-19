import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }
      const data = await response.json();
      login(data.username, data.role);
    } catch (err) {
      console.error('Error', err);
      setError('Something went wrong!');
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginForm}>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the start (top) of the container
    height: '100vh',
    padding: '20px', // Add padding to ensure spacing on smaller screens
    marginTop: '70px', // Add margin to move the card down from the top
  },
  loginForm: {
    background: '#fff',
    padding: '40px', // Increase padding for equal spacing
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px', // Ensure the form doesn't get too wide
  },
  input: {
    display: 'block',
    width: '95%', // Make input fields full width
    marginBottom: '20px', // Increase margin for better spacing
    padding: '10px', // Adjust padding for input fields
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    display: 'block',
    width: '100%', // Make button full width
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;