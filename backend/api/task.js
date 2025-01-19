const express = require('express');
const router = express.Router();

let tasks = []; // In-memory storage for tasks
let auditLogs = []; // In-memory storage for approval audit logs

// Create a task
router.post('/', (req, res) => {
  const { title, description, deadline } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    deadline,
    status: 'Pending',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Approve a task
router.put('/:id/approve', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { username } = req.headers; // Get the username from headers (to log the approving user)

  const task = tasks.find((task) => task.id === taskId);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.status === 'Approved') {
    return res.status(400).json({ message: 'Task already approved' });
  }

  task.status = 'Approved';

  // Log the approval with time and user
  const approvalLog = {
    taskId: task.id,
    approvedBy: username,
    approvedAt: new Date().toISOString(),
  };
  auditLogs.push(approvalLog);

  res.json({ task, approvalLog });
});

module.exports = router;