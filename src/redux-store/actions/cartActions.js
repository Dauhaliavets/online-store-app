const TOGGLE_CHOISE = 'TOGGLE_CHOISE';
const CHANGE_COUNT = 'CHANGE_COUNT';
const DELETE_CARD = 'DELETE_CARD';

const toogleChoiseAction = (payload) => {
	return {
		type: TOGGLE_CHOISE,
		payload,
	};
};

const changeCountAction = (payload) => {
	return {
		type: CHANGE_COUNT,
		payload,
	};
};

const deleteCardAction = (payload) => {
	return {
		type: DELETE_CARD,
		payload,
	};
};

export { TOGGLE_CHOISE, CHANGE_COUNT, DELETE_CARD, toogleChoiseAction, changeCountAction, deleteCardAction };
