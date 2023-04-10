import { count } from "./count";

export default () => {
  return (
    <div className="App">
      <div className="card">component count is {count.value}</div>
    </div>
  );
};
