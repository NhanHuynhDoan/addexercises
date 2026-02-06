import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "RESET":
            return { count: 0 };

        default:
            return state;
    }
}

function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("Reducer render, count =", state.count);

    return (
        <div>
            <h2>useReducer Example</h2>
            <p>Count: {state.count}</p>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Tăng
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Giảm
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
        </div>

    );
}

export default UseReducerExample;
