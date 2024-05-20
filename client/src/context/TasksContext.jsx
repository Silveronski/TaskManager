import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TasksContext = createContext({
    tasks: [],
    createTask: async () => {},
    deleteTask: async () => {}
});

export const TasksContextProvider = ({ children }) => {
      const { tasks, createTask, deleteTask } = useTasks(); 

    return (
        <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}
