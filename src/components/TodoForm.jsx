import { useState } from "react";
import { TiTick } from "react-icons/ti";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const submitBtnClass = "h-12 w-16 flex justify-center items-center bg-green-500 rounded-e-xl";
    const inputClass = "capitalize w-80 h-12 outline-none px-4 text-xl font-mono rounded-s-xl";
    const tickStyles = { color: "white", height: 26, width: 26 };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="mt-4 flex">
                    <input
                        className={inputClass}
                        maxLength={19}
                        type="text"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button
                        type="submit"
                        className={submitBtnClass}
                    >
                        <TiTick style={tickStyles} />
                    </button>
                </div>
            </form>
        </section>
    );
};
