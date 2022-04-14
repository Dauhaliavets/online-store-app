import { ADD_USER, REMOVE_USER, CLEAR_CART } from '../actions/userActions';
import {
	CART_ADD_PRODUCT,
	CHANGE_COUNT,
	DELETE_CARD,
	TOGGLE_CHOISE,
} from '../actions/cartActions';

const initialState = {
	name: null,
	email: null,
	key: null,
	id: null,
	token: null,
	cart: []
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return { ...action.payload }
		case REMOVE_USER:
			return { ...initialState }
		case CART_ADD_PRODUCT:
			return { ...state, cart: [...state.cart, { ...action.payload }] }
		case CHANGE_COUNT:
			return {
				...state, cart: [...state.cart.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, count: action.payload.newCount };
						}
						return item;
					})],
			};
		case TOGGLE_CHOISE:
			return {
				...state,
				cart: [
					...state.cart.map((item) => {
						if (item.id === action.payload) {
							return { ...item, isChoise: !item.isChoise };
						}
						return item;
					}),
				],
			};
		case DELETE_CARD:
			return {
				...state, cart: [...state.cart.filter((item) => {
						return item.id !== action.payload
					})],
			};
		case CLEAR_CART:
			return { ...state, cart: [] }
		default:
			return state
	}
};

export { userReducer };