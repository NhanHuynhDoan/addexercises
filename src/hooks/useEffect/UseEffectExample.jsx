import { useEffect, useState } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component vừa được render lần đầu");
    }, []);

    useEffect(() => {
        console.log("Count thay đổi:", count);
    }, [count]);

    return (
        <div>
            <h2>useEffect Example</h2>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Tăng count
            </button>
        </div>
    );
}

export default UseEffectExample;
