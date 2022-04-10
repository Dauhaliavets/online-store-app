import {
	TOGGLE_CHOISE,
	CHANGE_COUNT,
	DELETE_CARD,
	CART_ADD_PRODUCT,
} from '../actions/cartActions';

const initialState = [];

function cartReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_CHOISE:
			return [
				...state.map((item) => {
					if (item.id === action.payload) {
						return { ...item, isChoise: !item.isChoise };
					}
					return item;
				}),
			];
		case CHANGE_COUNT:
			return [
				...state.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, count: action.payload.newCount };
					}
					return item;
				}),
			];
		case DELETE_CARD:
			return [
				...state.filter((item) => {
					return item.id !== action.payload;
				}),
			];
		case CART_ADD_PRODUCT:
			return [...state, action.payload];

		default:
			return state;
	}
};


export { cartReducer };