const express = require('express');
const cors = require('cors');
const taskRoutes = require('./api/task');
const authRoutes = require('./api/auth');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
