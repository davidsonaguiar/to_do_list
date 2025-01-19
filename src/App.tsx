import Counter from "./components/counter.tsx";
import {TaskList} from "./components/task-list.tsx";
import {Header} from "./components/header.tsx";

function App() {
    return (
        <>
            <Header />
            <main className="mt-[28vh]">
                <div className="flex gap-2 w-full max-w-2xl p-5 -mb-4 mx-auto items-center justify-between">
                    <Counter />
                </div>
                <TaskList />
            </main>
        </>
    );
}
export default App;
