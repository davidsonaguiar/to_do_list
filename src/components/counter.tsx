import {useTaskContext} from "../context/use-task-context.ts";

function Counter() {
    const {taskLength, tasksDone} = useTaskContext();

    return(
        <p className="ml-auto text-sky-600 text-xs transition duration-75">
            Concluidas
            <span className="ml-2 py-2 px-4 bg-neutral-800 text-neutral-100 transition duration-75">
                {taskLength} de {tasksDone}
            </span>
        </p>
    )
}

export default Counter;