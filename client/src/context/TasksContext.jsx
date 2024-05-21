import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TasksContext = createContext({
    tasks: [],
    createTask: async () => {},
    fetchTask: async () => {},
    updateTask: async () => {},
    deleteTask: async () => {}
});

export const TasksContextProvider = ({ children }) => {
    const { tasks, createTask, fetchTask, updateTask, deleteTask } = useTasks(); 
    return (
        <TasksContext.Provider value={{ tasks, createTask, fetchTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}