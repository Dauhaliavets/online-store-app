import { combineReducers } from 'redux';
import cartReducer from "./reducers/cartReducer";
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

const rootReducers = combineReducers({
	cart: cartReducer,
	products: productsReducer,
	user: userReducer,
});

export default rootReducers;