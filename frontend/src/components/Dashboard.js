import React, { useState, useEffect } from 'react';
import { getProfile, getTasks, createTask, updateTask, deleteTask } from '../api';
import Navbar from './Navbar';

const Dashboard = () => {
  const token = localStorage.getItem('access_token');
  const [profile, setProfile] = useState({});
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchData = async () => {
    const profileRes = await getProfile(token);
    setProfile(profileRes.data);

    const tasksRes = await getTasks(token);
    setTasks(tasksRes.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async () => {
    if (!newTask) return;
    await createTask(token, { title: newTask });
    setNewTask('');
    fetchData();
  };

  const handleToggle = async (task) => {
    await updateTask(token, task.id, { ...task, completed: !task.completed });
    fetchData();
  };

  const handleDelete = async (task) => {
    await deleteTask(token, task.id);
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3>Welcome, {profile.username}</h3>
        <div className="mb-3">
          <input className="form-control mb-2" placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button className="btn btn-success mb-3" onClick={handleCreate}>Add Task</button>
        </div>
        <ul className="list-group">
          {tasks.map(task => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }} onClick={() => handleToggle(task)}>
                {task.title}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
