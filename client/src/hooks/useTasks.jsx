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
      response && response.data ? setTasks(response.data.tasks) : setTasks([]);
    } 
    catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const createTask = async (taskName) => {
    try {
      const response = await api.post('/', { name: taskName });
      if (response && response.data) {
        setTasks((prevTasks) => [...prevTasks, response.data.task]);
        return response.data.task;
      }
    } 
    catch (err) {
      console.error('Error creating task:', err);
      return err;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await api.delete(`/${taskId}`);
      if (response && response.data) {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        return response.data.task;
      }
    } 
    catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const fetchTask = async (taskId) => {
    try {
      const resposne = await api.get(`/${taskId}`);
      if (resposne && resposne.data) {
        return resposne.data.task;
      }
    } 
    catch (err) {
      console.error('Error fetching task:', err);
    }
  }

  const updateTask = async (taskId) => {

  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, createTask, fetchTask, deleteTask};
};