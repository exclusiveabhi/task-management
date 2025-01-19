import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav style={styles.navbar}>
        <h1 style={styles.title}>Assignment</h1>
        {user && (
          <div style={styles.userSection}>
            <span className="welcome-text" style={styles.welcome}>Welcome, {user.username}</span>
            <button
              onClick={logout}
              style={styles.logoutButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.logoutButtonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.logoutButton.backgroundColor}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
      <style>
        {`
          @media (max-width: 600px) {
            .welcome-text {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '21px 20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: '#000', // Set text color to black
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  welcome: {
    marginRight: '10px',
    fontSize: '16px',
    color: '#000', // Set text color to black
  },
  logoutButton: {
    padding: '5px 15px',
    backgroundColor: '#007bff',
    color: '#fff', // Set text color to white
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logoutButtonHover: {
    backgroundColor: '#0056b2',
  },
};

export default Navbar;