const URL = 'http://localhost:3500/';
export const ENDPOINTS = {
  PRODUCTS: 'products'
}

const getDataFromServer = async (query) => {
	try {
		let response = await fetch(`${URL}${query}`);
		let data = await response.json();
		return data;
	} catch(e) {
		console.log(e);
	}
};

export { getDataFromServer };