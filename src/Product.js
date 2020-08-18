import React from "react";

function Product(props) {
  return (
    <div>
      <h2>{props.product.id}:{props.product.name}({props.product.price})</h2>
    </div>
  );
}

export default Product;
