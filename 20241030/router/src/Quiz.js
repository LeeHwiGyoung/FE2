import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function Quiz() {
  return (
    <BrowserRouter>
      <Link to="/">go Home</Link>
      <Link to="/products/1">go Products 1</Link>
      <Link to="/products/1/notice">go Products 1 notice</Link>
      <Link to="/cart">go cart</Link>
      <Link to="/users">go Users</Link>
      <Link to="/users/coupon">go coupon</Link>
      <Link to="/users/question">go question</Link>
      <Link to="/users/notice">go notice</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/notice" element={<ProductDetailNotice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<User />}>
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//Product Detail Notice를 중첩라우팅 사용 x => id에 따라 notice의 페이지가 달라지기 때문
const Home = () => {
  return <div>home page</div>;
};

const ProductDetail = () => {
  return (
    <>
      <div>ProductDetail</div>
      <Outlet />
    </>
  );
};

const ProductDetailNotice = () => {
  return <div>ProductDetailNotice</div>;
};

const Cart = () => {
  return <div>Cart</div>;
};

const Coupon = () => {
  return <div>Coupon</div>;
};

const Question = () => {
  return <div>Question</div>;
};

const Notice = () => {
  return <div>Notice</div>;
};

const User = () => {
  return (
    <>
      <div>User</div>
      <Outlet />
    </>
  );
};
