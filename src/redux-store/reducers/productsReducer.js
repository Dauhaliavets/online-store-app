import sortProducts from "../../js/sortProducts"
import { SET_PRODUCTS, SET_SORT } from "../actions/productsActions"

const initialState = {
  all: [],
  visible: [],
  sort: "Feature"
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
    default: 
      return state
}
}

export default productsReducer