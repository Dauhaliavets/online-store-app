import React from "react";
import { useDispatch } from "react-redux";
import { changeCountAction, deleteCardAction } from "../../../../../../redux-store/actions/cartActions";
import s from "./CountChanger.module.css"

export function CountChanger({ product, cart }) {
  const dispatch = useDispatch()
  let count = 0
  cart.forEach(cartProduct => {
    if (cartProduct.id === product.id) {
      count = cartProduct.count
    }
  });

  function minusHandler() {
    if (count <= 1) {
      dispatch(deleteCardAction(product.id))
    }
    dispatch(changeCountAction({id: product.id, newCount: +count - 1}))
  }

  function plusHandler() {
    dispatch(changeCountAction({id: product.id, newCount: +count + 1}))
  }

  return (
    <div className={s.count_changer}>
      <button className={s.btn}
      onClick={minusHandler}> - </button>
      {` ${count} `}
      <button className={s.btn}
      onClick={plusHandler}> + </button>
    </div>
  );
}