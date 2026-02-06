import React, { useState } from "react";

const ChildComponent = React.memo(function ChildComponent({ count }) {
    console.log("ChildComponent render");

    return (
        <div>
            <p>Child count: {count}</p>
        </div>
    );
});

function MemoExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <h2>memo (React.memo) Example</h2>

            <p>Parent count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Tăng count
            </button>

            <br /><br />

            <ChildComponent count={count} />

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

export default MemoExample;
