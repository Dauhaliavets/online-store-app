import { ADD_USER, REMOVE_USER } from '../actions/userActions';

const initialState = {
	name: null,
	email: null,
	password: null,
	id: null,
	token: null
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return { ...action.payload }
		case REMOVE_USER:
			return { ...initialState }
		default:
			return state
	}
}