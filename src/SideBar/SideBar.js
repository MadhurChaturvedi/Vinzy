import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Colors/Color";

import "./SideBar.css";
export default function SideBar({ handleChange }) {
  console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
}
