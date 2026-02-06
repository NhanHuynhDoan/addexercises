import UseStateExample from "./hooks/useState";
import UseEffectExample from "./hooks/useEffect";
import UseReducerExample from "./hooks/useReducer";
import UseRefExample from "./hooks/useRef";
import UseMemoExample from "./hooks/useMemo";
import UseCallbackExample from "./hooks/useCallback";
import MemoExample from "./hooks/memo";
import FetchCRUD from "./api/fetch";
import AsyncAwaitCRUD from "./api/async-await";
import AxiosCRUD from "./api/axios";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>React Hooks Demo</h1>

            <hr />
            <h2>useState</h2>
            <UseStateExample />

            <hr />
            <h2>useEffect</h2>
            <UseEffectExample />

            <hr />
            <h2>useReducer</h2>
            <UseReducerExample />

            <hr />
            <h2>useRef</h2>
            <UseRefExample />

            <hr />
            <h2>useMemo</h2>
            <UseMemoExample />

            <hr />
            <h2>useCallback</h2>
            <UseCallbackExample />

            <hr />
            <h2>memo</h2>
            <MemoExample />

            <FetchCRUD />
            <AsyncAwaitCRUD />
            <AxiosCRUD />
        </div>
    );
}

export default App;
