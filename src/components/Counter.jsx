const counter = () => {
    return (
        <div className="flex gap-3 items-center p-4" >
            <button className="border w-10 aspect-square rounded cursor-pointer hover:bg-blue-600 hover:text-white" onClick={() => alert("ha ha ha ")} >+</button>
            <span>0</span>
            <button className="border w-10 aspect-square rounded cursor-pointer hover:bg-blue-600 hover:text-white" onClick={() => alert("ho ho ho")}>-</button>
        </div>
    );
};

export default counter;