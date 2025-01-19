import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://task-management-assignment-khng.onrender.com/api/auth/login', {
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
        {error && <span style={styles.span}>{error}</span>}
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
        <p>Username:- admin Password:- admin  <span style={styles.span}>role: admin</span></p>
        <p>Username:- user Password:- user <span style={styles.span}>for role: user</span></p>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    height: '100vh',
    padding: '20px', 
    marginTop: '70px',
  },
  span: {
    color: 'red',
  },
  loginForm: {
    background: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '20px',
    padding: '10px', 
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    display: 'block',
    width: '100%', 
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;