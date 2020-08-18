import React from "react";
import "./styles.css";
import Product from "./Product";
import productsData from "./vshcoolproducts";

export default function App() {
  const productComponent = productsData.map((item) => (
    <Product  product={item}/>
  ));

  return <div className="App">{productComponent}</div>;
}
