import { useEffect, useRef, useState } from "react";

function UseRefExample() {
  const inputRef = useRef(null); 
  const renderCount = useRef(0);  

  const [text, setText] = useState("");

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component render lần:", renderCount.current);
  });

  const handleFocus = () => {
    inputRef.current.focus();
    console.log("Focus vào input bằng useRef");
  };

  return (
    <div>
      <h2>useRef Example</h2>

      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập gì đó..."
      />

      <br /><br />

      <button onClick={handleFocus}>
        Focus input
      </button>

    </div>
  );
}

export default UseRefExample;
