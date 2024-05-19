import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/tasks'
});

export const fetchTasks = async () => {
    const resposne = await api.get('/');
    return resposne.data;
}

export const createTask = async(taskName) => {
    const resposne = await api.post('/', taskName);
    return resposne.data;
}