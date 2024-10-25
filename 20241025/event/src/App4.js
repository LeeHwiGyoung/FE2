import React, { useState } from "react";
import SimpleRouter from "./Components/SimpleRouter";

export default function App4() {
  const [loginType, setLoginType] = useState("");

  return (
    <>
      <button onClick={() => setLoginType("admin")}>admin</button>
      <button onClick={() => setLoginType("user")}>user</button>
      <button onClick={() => setLoginType("guest")}> guest</button>
      <SimpleRouter loginType={loginType} />
    </>
  );
}
