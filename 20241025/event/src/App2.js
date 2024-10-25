import React from "react";
import UserInfo from "./Components/UserInfo";

export default function App2() {
  const userInfoData = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  function displayUserInfo(userInfoData) {
    return userInfoData.map((userInfo) => {
      return (
        <UserInfo
          key={userInfo.id}
          userName={userInfo.name}
          userEmail={userInfo.email}
          userJob={userInfo.job}
        />
      );
    });
  }
  return (
    <article>
      <h1>User List</h1>
      <ul>{displayUserInfo(userInfoData)}</ul>
    </article>
  );
}
