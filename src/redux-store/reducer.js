import { combineReducers } from 'redux';
import cartsReducer from "./reducers/cartsReducer";

const rootReducers = combineReducers({
	carts: cartsReducer,
});

export default rootReducers;