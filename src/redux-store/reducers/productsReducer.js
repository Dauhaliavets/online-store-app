import { SET_PRODUCTS } from "../actions/productsActions"

function productsReducer(state = {}, action) {
  switch(action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, {all: action.payload})
    default: 
      return state
}
}

export default productsReducer