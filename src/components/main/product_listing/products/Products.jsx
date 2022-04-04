import React from "react";
import s from './Products.module.css'
import Product from "./Product/Product";

function Products({ products }) {
  if (products.length < 1) return (
    <div className={s.products}>
      <h3 className={s.not_found}>Products not found...</h3>
    </div>
  );

  const visibleProducts = products.map(product => <Product product={product} key={product.id}/>)

  return (
    <div className={s.products}>
      {visibleProducts}
    </div>
  );
}

export default Products