import {createContext} from "react";

export interface ToastContextProps {
    message: string;
    show: boolean;
    type: "success" | "error";
    close: () => void;
    success: (message: string) => void;
    error: (message: string) => void;
}

export const ToastContext = createContext<ToastContextProps | null>(null);
