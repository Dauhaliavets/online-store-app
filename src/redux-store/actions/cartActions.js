const TOGGLE_CHOISE = 'TOGGLE_CHOISE';

const toogleChoiseAction = (payload) => {
	return {
		type: TOGGLE_CHOISE,
		payload,
	}
}

export { TOGGLE_CHOISE, toogleChoiseAction };