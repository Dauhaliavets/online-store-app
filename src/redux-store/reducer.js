import { combineReducers } from 'redux';
import cartReducer from "./reducers/cartReducer";

const rootReducers = combineReducers({
	cart: cartReducer,
});

export default rootReducers;