import React from "react";
import s from "./FilterSideBar.module.css"
import Filter from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../redux-store/actions/productsActions";

function FilterSideBar() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.products.filter)
  let brands = [...new Set(useSelector(state => state.products.all).map(product => product.brand))]
  brands = brands.map(brand => {
    const isChecked = Array.isArray(filter.brands) && filter.brands.includes(brand)

    return <div className={`${s.brand} ${ isChecked ? s.active : ""}`}
    key={brand}
    onClick={() => {
      if (isChecked) {
        dispatch(setFilter({ brands: [...filter.brands.filter(el => el !== brand)] }))
        return
      } 
      dispatch(setFilter({ brands: [...filter.brands, brand] }))
    }}>
      <div className={s.brand_check}></div>
      <div className={s.brand_name}>{brand}</div>
    </div>
  })


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
        {brands}
      </Filter>
    </div>
  );
}

export default FilterSideBar