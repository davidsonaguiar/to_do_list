import InputText from "./InputText.tsx";
import Button from "./button.tsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import {useTaskContext} from "../hooks/use-task-context.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import {CreateTaskValidation} from "../validation/create-task-validation.ts";

export function CreateTaskForm() {
    const {create} = useTaskContext();
    const [form, setForm] = useState<string>("");
    const [error, setError] = useState<string>("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const validation = CreateTaskValidation.safeParse(form);
        if(!validation.success) setError(validation.error.errors[0]?.message);
        else setError("")
        setForm(event.currentTarget.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const validation = CreateTaskValidation.safeParse(form);
        if(!validation.success) return setError(validation.error.errors[0]?.message);
        create(form);
        setForm("");
    }

    return (
        <form
            className="
                    px-5 pb-2 bg-gradient-to-t to-50% to-neutral-950 from-50% from-neutral-900
                    absolute bottom-0 translate-y-1/2
                    w-full max-w-2xl
            "
            onSubmit={handleSubmit}
        >
            <div className="flex gap-2 w-full m-auto items-center">
                <InputText
                    id="task"
                    name="task"
                    value={form}
                    placeholder="Adicione uma tarefa"
                    handleChange={handleChange}
                />
                <Button content="Criar" variant="add" type="submit">
                    <PlusCircleIcon width={24} />
                </Button>
            </div>
            <p className="ml-2 mt-1 text-red-500">{error}</p>
        </form>
    );
}