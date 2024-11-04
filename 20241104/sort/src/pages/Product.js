import React, { useState } from "react";
import SortList from "../components/SortList";
import SortButton from "../components/SortButton";
import ProductList from "../components/ProductList";
import styled from "styled-components";

export default function Product() {
  const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    max-width: 1280px;
    margin: 40px auto;
    padding: 40px 20px;
  `;
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "스마트폰 X",
      price: 899000,
      category: "전자기기",
      rating: 4.5,
    },
    {
      id: 2,
      name: "블루투스 이어폰",
      price: 159000,
      category: "전자기기",
      rating: 4.3,
    },
    {
      id: 3,
      name: "면 티셔츠",
      price: 29900,
      category: "의류",
      rating: 4.0,
    },
    {
      id: 4,
      name: "청바지",
      price: 55000,
      category: "의류",
      rating: 4.2,
    },
    {
      id: 5,
      name: "유기농 사과",
      price: 12900,
      category: "식품",
      rating: 4.7,
    },
    {
      id: 6,
      name: "통밀빵",
      price: 4800,
      category: "식품",
      rating: 4.4,
    },
    {
      id: 7,
      name: "자바스크립트 완벧 가이드",
      price: 45000,
      category: "도서",
      rating: 4.9,
    },
    {
      id: 8,
      name: "리액트 프로그래밍",
      price: 38000,
      category: "도서",
      rating: 4.8,
    },
  ]);

  return (
    <StyledArticle>
      <h2>상품 목록</h2>
      <section>
        <SortList />
        <SortButton />
      </section>
      <ProductList products={products} />
    </StyledArticle>
  );
}
