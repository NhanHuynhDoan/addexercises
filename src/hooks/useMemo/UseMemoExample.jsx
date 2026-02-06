import { useMemo, useState } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Đang tính toán lại...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <p>Count: {count}</p>
      <p>Kết quả tính toán: {calculatedValue}</p>

      <button onClick={() => setCount(count + 1)}>
        Tăng count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Nhập ...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemoExample;
