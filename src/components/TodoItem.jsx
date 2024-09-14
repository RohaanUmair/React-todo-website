import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export const TodoItem = ({ onDeleteTodo, todo, isDone, handleIsDone }) => {
    const liClass = `bg-slate-300 text-gray-900 font-mono capitalize w-80 h-12 mt-4 rounded-2xl flex items-center px-4 text-xl justify-between ${isDone? 'line-through':''}`;
    const tickStyles = {
        backgroundColor: "green",
        borderRadius: "50%",
        color: "white",
        height: 28,
        width: 28,
        cursor: "pointer",
    };
    const delStyles = {
        backgroundColor: "red",
        borderRadius: "50%",
        color: "white",
        height: 28,
        width: 28,
        cursor: "pointer",
    };
    const tickBtn = isDone? (<TiTick style={{display: 'none'}} />):(<TiTick style={tickStyles} onClick={() => handleTodoDone(todo)} />)

    const handleTodoDone = (todo) => {
        handleIsDone(todo);
    }

    const handleDelete = (data) => {
        onDeleteTodo(data);
    };

    
    return (
        <li className={liClass}>
            {todo}
            <div className="flex w-16 justify-between">
                {tickBtn}
                <MdDeleteForever onClick={() => handleDelete(todo)} style={delStyles} />
            </div>
        </li>
    );
};
