import { useState } from 'react'


function UseStateExample() {
    const [count, setCount] = useState(0);

    console.log("Component render, count =", count);

    return (
        <div>
            <p>Giá trị hiện tại: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
}


export default UseStateExample
