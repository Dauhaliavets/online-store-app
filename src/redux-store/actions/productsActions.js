import actionCreator from "./actionCreator";

export const SET_PRODUCTS = "SET_PRODUCTS"
export const SET_SORT = "SET_SORT"
export const SET_FILTER = "SET_FILTER"


export const setProducts = actionCreator(SET_PRODUCTS)
export const setSort = actionCreator(SET_SORT)
export const setFilter = actionCreator(SET_FILTER)