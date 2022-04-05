import { combineReducers } from 'redux';
import cartReducer from "./reducers/cartReducer";
import productsReducer from './reducers/productsReducer';

const rootReducers = combineReducers({
	cart: cartReducer,
	products: productsReducer,
});

export default rootReducers;