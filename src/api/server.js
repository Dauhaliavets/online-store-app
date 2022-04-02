const URL = 'http://localhost:3500/';

const getDataFromServer = async (query) => {
	let response = await fetch(`${URL}${query}`);
	let data = await response.json();
	return data;
};

export { getDataFromServer };