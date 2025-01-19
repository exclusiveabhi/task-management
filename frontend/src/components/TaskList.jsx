import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { approveTask, getTasks } from '../api';

const TaskList = ({ tasks, setTasks }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks(user);
      setTasks(tasks);
    };
    fetchTasks();
  }, [user, setTasks]);

  const handleApprove = async (taskId) => {
    await approveTask(taskId, user);
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, status: 'Approved' } : task)));
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Status: {task.status}</p>
          {user.role === 'admin' && task.status === 'Pending' && (
            <button onClick={() => handleApprove(task.id)}>Approve</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;