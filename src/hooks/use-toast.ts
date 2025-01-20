import { ToastContext} from "../context/toast-context.ts";
import { useContext } from "react";

export default function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within a ToastContextProvider");
    return context;
}