import {ComponentProps} from "react";

type Props = { status: boolean } & ComponentProps<"li">

export function TaskItem(props: Props) {
    const { children, status } = props;
    return (
        <li
            className={`
            w-full p-4  m-auto bg-neutral-800 border
            flex gap-2 items-center justify-between transition duration-75
            ${!status 
                ? "text-neutral-50  border-neutral-700 hover:border-neutral-500"
                : "text-neutral-400 line-through bg-[#111111] borde border-[#111111]"
            }`}
        >
            {children}
        </li>
    );
}
