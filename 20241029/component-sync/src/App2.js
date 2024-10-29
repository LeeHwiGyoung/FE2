import React from "react";
import {
  Card,
  CardOne,
  CardTwo,
  Settingcard,
  ShareCard,
} from "./Components/Card";

export default function App2() {
  return (
    <>
      <CardOne></CardOne>
      <CardTwo></CardTwo>
      <Card className="setting" title="챌린지 설정">
        <Settingcard />
      </Card>
      <Card className="share" title="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}
