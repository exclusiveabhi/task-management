const express = require('express');
const router = express.Router();

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

// Auth login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // Send back the user role and username if successful
    res.json({ username: user.username, role: user.role });
  } else {
    // Return an error if user not found
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;