import useToast from "../hooks/use-toast.ts";
import {CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon} from "@heroicons/react/16/solid";
import Button from "./button.tsx";

export default function Toast() {
    const {type, message, show, close } = useToast();

    if(!show) return null;

    return (
        <div
             className=" w-full max-w-sm p-4 mb-4 bg-white border border-gray-200 dark:bg-neutral-800 dark:border-gray-700 text-gray-500 rounded shadow dark:text-gray-400 flex items-center absolute top-4 right-4 animate-slide-right z-40"
             role="alert"
        >
            {
                type === "success" ?
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200">
                        <CheckCircleIcon width={24}/>
                        <span className="sr-only">Check icon</span>
                    </div> :
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                        <ExclamationTriangleIcon width={24}/>
                        <span className="sr-only">Warning icon</span>
                    </div>
            }
            <div className="ms-3 text-sm font-normal mr-auto">{message}</div>
            <Button onClick={close}>
                <XMarkIcon width={20}/>
                <span className="sr-only">Fechar</span>
            </Button>
        </div>
    )
}