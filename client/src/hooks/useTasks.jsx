import { useState, useEffect } from 'react';
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/tasks'
});

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
 
  const fetchTasks = async () => { 
    try {
      const response = await api.get('/');
      if (response && response.data) {
        setTasks(response.data.tasks);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const createTask = async (taskName) => {
    try {
      const response = await api.post('/', { name: taskName });
      if (response && response.data) {
        setTasks((prevTasks) => [...prevTasks, response.data]);
      }
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, createTask };
};

