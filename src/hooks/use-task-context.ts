import {useContext} from "react";
import {TaskContext} from "../context/task-context.ts";

export function useTaskContext() {
    const context = useContext(TaskContext);
    if(!context) throw new Error("useTaskContext deve ser usado dentro do seu provedor");
    return context;
}