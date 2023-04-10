import { lazy } from "react";
import { count } from "./count";
import Component from "./component";
import "./App.css";

const LazyComponent = lazy(() => import("./component-lazy"));
function Card() {
  return (
    <div className="card">
      <button onClick={() => count.value++}>
        Click and count is {count.value}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card />
      <Component />
      <LazyComponent />
    </div>
  );
}

export default App;
