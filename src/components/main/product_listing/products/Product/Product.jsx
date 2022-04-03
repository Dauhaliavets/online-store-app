import React, { useRef, useState } from "react";
import s from "./Product.module.css";

function Product({ product }) {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false)
  const descriptionToggler = useRef("")

  if (!product) return "Not found"

  const { 
    brand, 
    category, 
    currency, 
    description, 
    discount, 
    id, 
    img, 
    price, 
    title 
  } = product

  const productDescription = Object.entries(description).map(([key, value]) => {
    return <div className={isDescriptionOpen? `${s.description_field} ${s.active}` : s.description_field} 
    key={key}>{key}{value}</div>
  })

  return (
    <div className={s.wrapper}>
      <div className={s.img_box}>
        <img className={s.img} src={img} alt="product card" />
      </div>
      <div className={s.text}>
        <h3>{title}</h3>
        <span className={s.price}>
          {price} <span className={s.currency}>{currency}</span>
          {" "}
          {discount ? <span className={s.before_discount}>{(price / 100 * (100 + discount)).toFixed(2)} {currency}</span> : undefined}
        </span>
        <div className={s.brand}>Brand: {brand}</div>
        <div className={s.category}>Category: {category}</div>
        <div className={s.description}
        onClick={(e) => {
          const isNeedClose = e.target === descriptionToggler.current
          if (isNeedClose) {
            setDescriptionOpen(!isDescriptionOpen)
          }
        }}>
          <span ref={descriptionToggler}>{isDescriptionOpen ? "Close " : "Open "}description </span>
          <div className={isDescriptionOpen ? `${s.arrow} ${s.active}` : s.arrow}></div> {productDescription}
        </div>
        <button className={s.cart_btn}>Add to cart <div className={s.cart}></div></button>
        <div className={s.article}>Article: {id}</div>
      </div>
    </div>
  );
}

export default Product