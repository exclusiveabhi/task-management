const express = require('express');
const router = express.Router();

const users = [
  { username: 'admin', password: 'admin', role: 'admin' },
  { username: 'user', password: 'user', role: 'user' }
];

router.post('/login', (req, res) => {
  const start = Date.now();
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.json({ username: user.username, role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
  const end = Date.now();
  console.log(`Login request took ${end - start}ms`);
});

module.exports = router;