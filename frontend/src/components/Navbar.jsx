import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>Task Approval System</h1>
      {user && (
        <div>
          <span>Welcome, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
