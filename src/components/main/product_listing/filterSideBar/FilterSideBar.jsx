import React from "react";
import s from "./FilterSideBar.module.css"
import Filter from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../redux-store/actions/productsActions";

function FilterSideBar() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.products.filter)
  const brands = new Set(useSelector(state => state.products.visible).map(product => product.brand))
  console.log(brands);

  return (
    <div className={s.wrapper}>
      <h4>You can filter by:</h4>
      <Filter header={'Price'}>
        <p>Min price</p>

        <input type="text" 
        value={filter.priceMin ? filter.priceMin : ""} 
        className={s.input}
        onChange={
          (e) => {
            dispatch(setFilter({ priceMin: +e.target.value }))
          }
        }/>

        <p>Max Price</p>

        <input type="text" 
        value={filter.priceMax ? filter.priceMax : ""} 
        className={s.input}
        onChange={
          (e) => {
            dispatch(setFilter({ priceMax: +e.target.value }))
          }
        }/>
      </Filter>
      <Filter header={'Brands'}>
        brands
      </Filter>
    </div>
  );
}

export default FilterSideBar