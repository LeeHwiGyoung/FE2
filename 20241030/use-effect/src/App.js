import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count % 2) {
      alert("홀수입니다");
    } else {
      alert("짝수입니다");
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [today]);
  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

export default App;
