import Title from "./title.tsx";
import {CreateTaskForm} from "./create-task-form.tsx";

export function Header() {
    return (
        <header
            className="
                w-full h-[20vh] fixed top-0 left-0 bg-neutral-950
                flex flex-col items-center justify-center z-10"
        >
            <Title />
            <CreateTaskForm />
        </header>
    );
}