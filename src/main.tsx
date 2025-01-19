import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TaskContextProvider} from "./context/task-context-provider.tsx";

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
    <TaskContextProvider>
        <App/>
    </TaskContextProvider>
)
