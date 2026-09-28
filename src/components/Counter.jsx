import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    const increment = () => setNum((prev) => prev + 1);
    const decrement = () => setNum((prev) => prev - 1);

    return (
        <div className="flex gap-3 items-center p-4">
            <button
                className="border w-10 aspect-square rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                onClick={increment}>+</button>
            <span>{num}</span>
            <button className="border w-10 aspect-square rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;