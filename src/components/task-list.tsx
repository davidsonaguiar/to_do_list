import Label from "./label.tsx";
import Checkbox from "./checkbox.tsx";
import Button from "./button.tsx";
import {TrashIcon} from "@heroicons/react/24/outline";
import {Task} from "../models/Task.ts";
import {ListVoid} from "./list-void.tsx";
import {useTaskContext} from "../context/use-task-context.ts";
import {TaskItem} from "./task-item.tsx";

export function TaskList() {
    const {tasks, toggleCheck, remove} = useTaskContext();

    if(tasks.length === 0) return <ListVoid />;

    return (
        <ul className="w-full max-w-2xl m-auto p-5 flex flex-col gap-3">
            {
                tasks.map((task: Task) => (
                    <TaskItem status={task.status} key={task.id}>
                        <Label htmlFor={task.id}>
                            <Checkbox
                                id={task.id}
                                name={task.id}
                                checked={task.status}
                                onChange={() => toggleCheck(task.id)}
                            />
                            {task.name}
                        </Label>
                        <Button
                            variant="delete"
                            disabled={task.status}
                            onClick={() => remove(task.id)}
                        >
                            <TrashIcon width={20} />
                            <span className="sr-only">Deletar task: {task.name}</span>
                        </Button>
                    </TaskItem>
                ))
            }
        </ul>
    );
}