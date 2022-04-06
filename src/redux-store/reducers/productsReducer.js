import filterProducts from "../../js/filterProducts"
import sortProducts from "../../js/sortProducts"
import { SET_FILTER, SET_PRODUCTS, SET_SORT } from "../actions/productsActions"


const initialState = {
  all: [],
  visible: [],
  sort: "Feature",
  filter: {
    priceMin: 0,
    priceMax: null,
    brands: null,
    category: ''
  }
}

function productsReducer(state = initialState, action) {
  switch(action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, {
        all: [...action.payload],
        visible: sortProducts(state.sort, [...action.payload])
      })
    case SET_SORT:
      return Object.assign({}, state, {
        sort: action.payload,
        visible: sortProducts(action.payload, state.visible)
      })
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: Object.assign({}, state.filter, action.payload),
        visible: filterProducts(Object.assign({}, state.filter, action.payload), 
        sortProducts(state.sort, [...state.all]))
      })
    default: 
      return state
}
}

export default productsReducer