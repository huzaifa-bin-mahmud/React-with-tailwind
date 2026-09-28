import { useState } from "react";

const ChangeText = () => {
    const [text, setText] = useState("hello world");

    const handleText = () => {
        setText((currentText) =>
            currentText === "hello world" ? "hello universe" : "hello world"
        );
    };

    return (
        <div className="flex flex-col items-center my-3 gap-2">
            <h2 className="text-2xl">{text}</h2>
            <button className="border rounded px-3 py-1" onClick={handleText}>
                Change Text
            </button>
        </div>
    );
};

export default ChangeText;