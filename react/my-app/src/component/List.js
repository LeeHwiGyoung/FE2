import { useEffect } from "react";

function List() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  const ulStyle = {
    listStyle: "none",
    textAlign: "left",
    padding: 0,
  };
  const visitedPlace = {
    background: "blue",
    color: "white",
    border: "1px solid black",
  };

  const listItemStyle = {
    border: "1px solid black",
  };

  const makeList = (list) => {
    return list.map((item) => {
      return (
        <li key={item.id} style={item.visited ? visitedPlace : listItemStyle}>
          {item.area}
        </li>
      );
    });
  };

  return <ul style={ulStyle}>{makeList(list)}</ul>;
}

export default List;
