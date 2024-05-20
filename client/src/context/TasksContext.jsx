import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TasksContext = createContext({
    tasks: [],
    createTask: async () => {},
    fetchTask: async () => {},
    deleteTask: async () => {}
});

export const TasksContextProvider = ({ children }) => {
    const { tasks, createTask, fetchTask ,deleteTask } = useTasks(); 
    return (
        <TasksContext.Provider value={{ tasks, createTask, deleteTask, fetchTask }}>
            {children}
        </TasksContext.Provider>
    )
}
