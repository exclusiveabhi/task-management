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
    <div style={styles.taskList}>
      <center><h2>Task List</h2></center>
      <div style={styles.taskCards}>
        {tasks.map((task) => (
          <div key={task.id} style={styles.taskCard}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Status: {task.status}</p>
            {user.role === 'admin' && task.status === 'Pending' && (
              <button onClick={() => handleApprove(task.id)} style={styles.button}>Approve</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  taskList: {
    padding: '20px',
    marginTop: '20px', // Adjust margin to ensure proper spacing
  },
  taskCards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  taskCard: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    flex: '1 1 calc(33.333% - 20px)', // Adjust the width to fit 2-3 cards per row
    boxSizing: 'border-box',
    minWidth: '300px', // Ensure a minimum width for smaller screens
    maxWidth: '400px', // Ensure a maximum width for larger screens
  },
  button: {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TaskList;