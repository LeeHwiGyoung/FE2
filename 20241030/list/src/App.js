import { RoundButton } from "./components/Buttons";
import List from "./components/List";

function App() {
  const listData = [
    {
      title: "France",
      population: "200",
      id: "1",
      loc: "europe",
    },
    {
      title: "Italy",
      population: "300",
      id: "2",
      loc: "europe",
    },
    {
      title: "England",
      population: "400",
      id: "3",
      loc: "europe",
    },
    {
      title: "America",
      population: "500",
      id: "4",
      loc: "north-america",
    },
    {
      title: "Korea",
      population: "600",
      id: "5",
      loc: "asia",
    },
  ];
  const handleOnClick = () => {};

  return (
    <article>
      <h2>나라 목록</h2>
      <List ListItemData={listData} />
      <RoundButton onClick={handleOnClick}>전체목록</RoundButton>
      <RoundButton onClick={handleOnClick}>유럽목록</RoundButton>
    </article>
  );
}
export default App;
