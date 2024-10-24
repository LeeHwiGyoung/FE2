import React from "react";
import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  function DlList() {
    const listItems = items.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      );
    });

    return listItems;
  }

  return <dl>{DlList()}</dl>;
}
export default App;
