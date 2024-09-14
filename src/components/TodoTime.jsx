import { useEffect, useState } from "react";

export const TodoTime = () => {
    const [dateAndTime, setDateAndTime] = useState("");

    const h1Class = "text-5xl text-white font-bold text-center mt-8";
    const h2Class = "text-white text-2xl mt-6";

    useEffect(() => {
        const interval = setInterval(() => {
            const formattedDate = new Date().toLocaleDateString();
            const formattedTime = new Date().toLocaleTimeString();

            setDateAndTime(`${formattedDate} - ${formattedTime}`);
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 className={h1Class}>Todo App</h1>
            <h2 className={h2Class}>{dateAndTime}</h2>
        </>
    );
};
