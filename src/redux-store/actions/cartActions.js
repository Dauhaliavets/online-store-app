const TOGGLE_CHOISE = 'TOGGLE_CHOISE';
const CHANGE_COUNT = 'CHANGE_COUNT';

const toogleChoiseAction = (payload) => {
	return {
		type: TOGGLE_CHOISE,
		payload,
	}
}

const changeCountAction = (payload) => {
	return {
		type: CHANGE_COUNT,
		payload,
	}
}

export { TOGGLE_CHOISE, CHANGE_COUNT, toogleChoiseAction, changeCountAction };