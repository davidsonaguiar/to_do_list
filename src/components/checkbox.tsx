import {ComponentProps} from "react";


function Checkbox(props: ComponentProps<"input">) {
   return (
        <input
            className="
            appearance-none cursor-pointer relative z-0 transition duration-75
            w-5 h-5 rounded-full flex-shrink-0
            border-2 border-sky-500 bg-transparent hover:border-sky-600
            checked:bg-purple-700 checked:border-purple-700 checked:hover:bg-purple-600 checked:hover:border-purple-600
            checked:before:absolute before:w-3 before:h-3 before:bottom-1 before:translate-x-0.5
            checked:before:content-['\2713'] before:text-gray-100 leading-none
            "
            type="checkbox"
            {...props}
        />
    );
}

export default Checkbox;
