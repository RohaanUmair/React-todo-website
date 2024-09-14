import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoTime } from "./TodoTime";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const mainDivClass = "bg-black flex flex-col items-center w-full min-h-screen";
    const delAllBtnClass = "bg-red-500 text-white py-2 px-7 rounded mt-8 hover:bg-red-600 active:bg-red-400 transition-colors duration-75";

    const [task, setTask] = useState([]);

    const handleSubmit = (inputValue) => {
        if (inputValue.trim()) {
            if (!task.includes(inputValue)) {

                let obj = { text: inputValue, isDone: false }

                setTask((prevVal) => [...prevVal, obj]);
            }
        }
    };

    const handleDelete = (Todo) => {
        setTask(task.filter((todo) => todo.text !== Todo));
    };

    const handleIsDone = (a) => {
        let updatedTask = [];
        
        task.forEach((obj) => {
            if (obj.text === a) {
                updatedTask.push({ ...obj, isDone: !obj.isDone });
            } else {
                updatedTask.push(obj);
            }
        });
    
        setTask(updatedTask);
    };
    
    
    return (
        <div className={mainDivClass}>

            <TodoTime />

            <TodoForm onAddTodo={(inputValue) => handleSubmit(inputValue)} />

            <section>
                <ul className="mt-12">
                    {task.map((data, index) => {
                        return (
                            <TodoItem
                                onDeleteTodo={(todo) => handleDelete(todo)}
                                todo={data.text}
                                isDone={data.isDone}
                                handleIsDone={(a) => handleIsDone(a)}
                                key={index}
                            />
                        );
                    })}
                </ul>
            </section>

            {
                task.length !== 0 ? (
                    <button className={delAllBtnClass} onClick={() => setTask([])}>Delete All</button>
                ) : (null)
            }


        </div>
    );
};
