import React, { useState } from "react";
import FeelingList from "./Components/FeelingList";
import DisplayFeeling from "./Components/DisplayFeeling";
import "./CSS/App3.css";
export default function App3() {
  const [feeling, setFeeling] = useState("");

  return (
    <article>
      <h1>오늘의 기분을 선택해주세요😄</h1>
      <FeelingList setFeeling={setFeeling} />
      <DisplayFeeling feeling={feeling} />
    </article>
  );
}
