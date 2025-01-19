export const getTasks = async (user) => {
  try {
    const response = await fetch('https://task-management-assignment-khng.onrender.com/api/tasks', {
      headers: { username: user.username, role: user.role },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching tasks:', errorData.message);
      return [];
    }
    const tasks = await response.json();
    return tasks;
  } catch (err) {
    console.error('Error fetching tasks:', err);
    return [];
  }
};
  
  export const approveTask = async (taskId, user) => {
    await fetch(`https://task-management-assignment-khng.onrender.com/api/tasks/${taskId}/approve`, {
      method: 'PUT',
      headers: { username: user.username, role: user.role },
    });
  };
  