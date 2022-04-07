const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

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

export { ADD_USER, REMOVE_USER, addUser, removeUser };