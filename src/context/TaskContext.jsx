import { createContext, useState } from "react";

export const TaskContext = createContext();

export const ContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('all');
    return (
        <TaskContext.Provider value={{filter, setFilter}}>
            {children}
        </TaskContext.Provider>
    )
}