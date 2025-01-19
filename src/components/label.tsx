import {ComponentProps} from "react";

function Label(props: ComponentProps<"label">) {
    return (
        <label
            className="
            text-sm cursor-pointer transition duration-75
            flex gap-3 flex-row flex-nowrap items-center"
            htmlFor={props.id}
        >
            {props.children}
        </label>
    );
}

export default Label;
