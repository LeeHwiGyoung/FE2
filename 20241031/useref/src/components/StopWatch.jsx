import { useState, useRef } from "react";

export default function StopWatch() {
  // 시작한 시간
  const [startTime, setStartTime] = useState(null);
  // 현재 시간 
  const [now, setNow] = useState(null);
  // 인터벌함수의 id
  const [intervalId, setIntervalId] = useState(null);
  
  let secondsPassed = useRef(0);

  function handleStart() {
    
    setStartTime(Date.now()-secondsPassed.current*1000);
    setNow(Date.now());

    if(intervalId !== null){ //start 여러번 눌렀을 경우 중복 호출 방지하기 위해 기존의 interval을 종료
        clearInterval(intervalId)    
    } 

    setIntervalId(setInterval(() => {
      setNow(Date.now());
    }, 10));
  }

  function handleStop() {
    clearInterval(intervalId);
  }

  
  function handleReset() {
    secondsPassed.current = 0;
    clearInterval(intervalId);
    setNow(null);
    setStartTime(null);
  }

  if (startTime !== null && now !== null) {
    secondsPassed.current = (now - startTime) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.current.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}