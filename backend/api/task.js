const express = require('express');
const router = express.Router();

let tasks = []; 
let auditLogs = [];


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

router.get('/', (req, res) => {
  res.json(tasks);
});

// Approve a task
router.put('/:id/approve', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { username } = req.headers; 

  const task = tasks.find((task) => task.id === taskId);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.status === 'Approved') {
    return res.status(400).json({ message: 'Task already approved' });
  }

  task.status = 'Approved';


  const approvalLog = {
    taskId: task.id,
    approvedBy: username,
    approvedAt: new Date().toISOString(),
  };
  auditLogs.push(approvalLog);

  res.json({ task, approvalLog });
});

module.exports = router;