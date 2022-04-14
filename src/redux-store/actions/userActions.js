const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const CLEAR_CART = 'CLEAR_CART';

function addUser(payload) {
	return {
		type: ADD_USER,
		payload,
	}
}

function removeUser() {
	return {
		type: REMOVE_USER
	}
}

function clearCart() {
	return {
		type: CLEAR_CART
	}
}

export { ADD_USER, REMOVE_USER, CLEAR_CART, addUser, removeUser, clearCart };