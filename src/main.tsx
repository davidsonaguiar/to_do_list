import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TaskContextProvider} from "./providers/task-context-provider.tsx";
import ToastContextProvider from "./providers/toast-context-provider.tsx";

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
    <ToastContextProvider>
        <TaskContextProvider>
            <App/>
        </TaskContextProvider>
    </ToastContextProvider>
)
