import { createContext, useState } from "react";

export const TasksContext = createContext({tasks: [], createTask: () => {}});

export const TasksContextProvider = ({ children, tasks, createTask }) => {
    console.log(tasksFromServer);

    return (
        <TasksContext.Provider value={{ tasks, createTask }}>
            {children}
        </TasksContext.Provider>
    )
}
