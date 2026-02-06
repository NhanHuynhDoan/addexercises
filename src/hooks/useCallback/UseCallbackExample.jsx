import { useCallback, useState } from "react";

function ChildComponent({ onClick }) {
    console.log("ChildComponent render");

    return (
        <div>
            <button onClick={onClick}>
                Click từ Child
            </button>
        </div>
    );
}

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");


    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>useCallback Example</h2>

            <p>Count: {count}</p>

            <button onClick={handleIncrement}>
                Tăng count (Parent)
            </button>

            <br /><br />

            <ChildComponent onClick={handleIncrement} />

            <br /><br />

            <input
                type="text"
                placeholder="Nhập ..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default UseCallbackExample;
