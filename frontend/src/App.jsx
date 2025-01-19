import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Login from './components/Login';

const App = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      const response = await fetch('https://task-management-assignment-khng.onrender.com/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating task:', errorData.message);
        return;
      }
      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]); // Update the task list state
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <div>
      <Navbar />
      {user ? (
        <>
          {user.role === 'admin' && <TaskForm createTask={createTask} />}
          <TaskList tasks={tasks} setTasks={setTasks} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;