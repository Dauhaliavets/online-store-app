import { setProducts } from "../actions/productsActions"
import { ENDPOINTS, getDataFromServer } from '../../api/server.js'

export const fetchProducts = () => {
    return async dispatch => {
      try {
        const products = await getDataFromServer(ENDPOINTS.PRODUCTS)
        dispatch(setProducts(products))
      } catch(e) {
        console.log(e);
      } 
    }
}
