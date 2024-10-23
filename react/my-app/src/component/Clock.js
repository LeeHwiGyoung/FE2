import { useEffect, useState } from "react";

function Clock() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const nowDate = new Date();

  function setCurrent() {
    setYear(nowDate.getFullYear());
    setMonth(nowDate.getMonth() + 1);
    setDate(nowDate.getDate());
    setHour(nowDate.getHours());
    setMin(nowDate.getMinutes());
    setSec(nowDate.getSeconds());
  }

  useEffect(() => {
    setCurrent();
  }, []);

  const clockWrapStyle = {
    background: "black",
    color: "white",
    fontWeight: "bold",
  };
  const colorRed = {
    color: "red",
  };
  return (
    <section style={clockWrapStyle}>
      <p style={colorRed}>년 : {year}</p>
      <p>
        월/일:{month}/{date}
      </p>
      <p>
        시간 : {hour}시{min}분{sec}초
      </p>
    </section>
  );
}

export default Clock;
