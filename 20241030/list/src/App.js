import { useEffect, useState } from "react";
import { RoundButton } from "./components/Buttons";
import List from "./components/List";

function App() {
  const [nationData, setNationData] = useState([]);
  const [type, setType] = useState("global");
  
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3000/nations");
        if (!res.ok) {
          throw new Error("do not connect network");
        }
        const json = await res.json();
        setNationData(json);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <article>
      <h2>나라 목록</h2>
      <List listItemData={nationData} type={type} />
      <RoundButton
        onClick={() => {
          setType("global");
        }}
      >
        전체목록
      </RoundButton>
      <RoundButton
        onClick={() => {
          setType("europe");
        }}
      >
        유럽목록
      </RoundButton>
    </article>
  );
}
export default App;
