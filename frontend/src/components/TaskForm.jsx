import React, { useState } from 'react';

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description, deadline });
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  return (
    <div style={styles.taskFormContainer}>
      <form style={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Create Task</button>
      </form>
    </div>
  );
};

const styles = {
  taskFormContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    height: 'auto', 
    padding: '20px', 
    marginTop: '20px', 
  },
  taskForm: {
    background: '#fff',
    padding: '40px', 
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px', 
  },
  input: {
    display: 'block',
    width: '80%',
    marginBottom: '20px', 
    padding: '10px', 
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    display: 'block',
    width: '80%', 
    marginBottom: '20px', 
    padding: '10px', 
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '85%',
    padding: '10px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TaskForm;