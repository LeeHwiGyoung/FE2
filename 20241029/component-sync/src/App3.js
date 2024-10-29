import React from "react";
import PriceFormatter from "./Components/PriceFormatter";
import {
  Contcard,
  ProductDescription,
  ProductImage,
  ProductSubTitle,
  ProductTitle,
} from "./Components/Contcard";
export default function App3() {
  return (
    <>
      <Contcard>
        <ProductImage
          src={"https://picsum.photos/id/237/299/300"}
          alt={"검은강아지"}
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          enim ea eveniet porro magni minus reiciendis facilis. Odio explicabo,
          doloribus blanditiis nemo minima autem architecto. Iste illum incidunt
          iusto quasi.
        </ProductDescription>
        <PriceFormatter price={1000} currenyCode={"USD"} />
      </Contcard>
    </>
  );
}
