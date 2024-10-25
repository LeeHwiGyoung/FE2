import { useState } from "react";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };
  return isLogin ? (
    <Homepage />
  ) : (
    <Login userData={user} setLogined={setIsLogin} />
  );
}

export default App;
