import {Task} from "../models/Task.ts";
import {createContext} from "react";

export interface TaskContextProps {
    tasks: Task[];
    tasksDone: number;
    taskLength: number;
    create: (name: string) => void;
    toggleCheck: (id: string) => void;
    remove: (id: string) => void;
}

export const TaskContext = createContext<TaskContextProps | null>(null);