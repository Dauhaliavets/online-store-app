import React from "react";
import s from './Products.module.css'
import Product from "./Product/Product";

function Products({ products }) {
  if (!products) return (<h3 className={s.not_found}>Not found products</h3>)

  const visibleProducts = products.map(product => <Product product={product} key={product.id}/>)

  return (
    <div className={s.products}>
      {visibleProducts}
    </div>
  );
}

export default Products