import {ReactNode, useEffect, useState} from "react";
import {TaskContext} from "./task-context.ts";
import {Task} from "../models/Task.ts";
import {nanoid as UUID} from "nanoid";

export function TaskContextProvider(props: { children: ReactNode}) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const tasksDone = tasks.filter(task => task.status).length;
    const taskLength = tasks.length;

    useEffect(() => {
        const tasksStorage = localStorage.getItem("tasks");
        if(tasksStorage) {
            setTasks(() => {
                return JSON.parse(tasksStorage);
            })
        }
    }, [])

    const save = (tasks: Task[]) => {
        setTasks(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    };

    function create(name: string) {
        const taskExists = tasks.find(task => task.name === name);
        if(taskExists) throw new Error("Tarefa ja cadastrada.");

        const newTasks = [
            ...tasks,
            {
                id: UUID(),
                name,
                status: false
            }
        ]
        save(newTasks);
    }

    function toggleCheck(id: string) {
        const newTasks = tasks.map(task => {
            if(task.id !== id) return task;
            task.status = !task.status;
            return task;
        });
        save(newTasks);
    }

    function remove(id: string) {
        const newTasks = tasks.filter(task => task.id !== id);
        save(newTasks);
    }


    return (
        <TaskContext.Provider value={{ tasks, tasksDone, taskLength, create, toggleCheck, remove }}>
            {props.children}
        </TaskContext.Provider>
    );
}