import React from "react";
import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
import Resume2 from "./Components/Resume2";
import Resume3 from "./Components/Resume3";

export default function App2() {
  return (
    <div>
      <Resume3
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <Resume2
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <Hello name="개리" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}
