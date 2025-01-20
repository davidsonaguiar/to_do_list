import {ReactNode, useState} from "react";
import {ToastContext} from "../context/toast-context.ts";
import Toast from "../components/toast.tsx";

export default function ToastContextProvider(props: { children: ReactNode }) {
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [type, setType] = useState<"success" | "error">("error");

    const close = () => setShow(false);

    function success(message: string) {
        setType("success");
        setMessage(message);
        setShow(true);
        time();
    }

    function error(message: string) {
        setType("error");
        setMessage(message);
        setShow(true);
        time();
    }

    function time() {
        setTimeout(() => {
            setShow(false);
        }, 5000);
    }

    return (
        <ToastContext.Provider value={{ message, show, type, close, success, error }}>
            {props.children}
            <Toast />
        </ToastContext.Provider>
    );
}
