import "./App.css";
import Clock from "./component/Clock.js";
import List from "./component/List.js";
function App() {
  function TextArea() {
    return (
      <div className="wrapper">
        <textarea
          readOnly
          maxLength={3}
          style={{ "background-color": "blue" }}
        />
      </div>
    );
  }

  const 함수 = () => {
    return "함수";
  };

  const 변수 = "변수";

  const 값 = true;

  return (
    <div className="App">
      {100 + 1}
      {"hello" + "world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {함수()}
      {변수}
      {값 ? "one" : "two"}
      <Clock />
      <List />
    </div>
  );
}

export default App;
