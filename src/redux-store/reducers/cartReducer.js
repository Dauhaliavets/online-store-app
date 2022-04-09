import {
	TOGGLE_CHOISE,
	CHANGE_COUNT,
	DELETE_CARD,
	CART_ADD_PRODUCT,
} from '../actions/cartActions';

const initialState = [
	{
		id: 0,
		brand: 'ZTE',
		category: 'Smartphone',
		title: 'Смартфон ZTE Blade L9 1/32GB, синий',
		description: {
			'Тип: ': 'Смартфон',
			'Диагональ экрана, дюймы: ': '5',
			'Емкость аккумулятора, мАч: ': '2000',
			'Процессор: ': 'SC7731E (4 ядра), 1.3 ГГц',
			'Основной материал корпуса: ': 'Пластик',
		},
		price: 188.58,
		discount: 0,
		currency: 'BYN',
		src: 'https://cdn1.ozone.ru/s3/multimedia-1/wc250/6273969685.jpg',
		isChoise: true,
		count: 1,
	},
	{
		id: 1,
		brand: 'ZTE',
		category: 'Smartphone',
		title: 'Смартфон ZTE Blade V30 4/128GB, серый',
		description: {
			'Тип: ': 'Смартфон',
			'Диагональ экрана, дюймы: ': '6.67',
			'Емкость аккумулятора, мАч: ': '5000',
			'Процессор: ': 'Tiger T618 (8 ядер), 2.0 ГГц',
			'Основной материал корпуса: ': 'Пластик',
		},
		price: 585.86,
		discount: 0,
		currency: 'BYN',
		src: 'https://cdn1.ozone.ru/s3/multimedia-l/wc250/6084701649.jpg',
		isChoise: true,
		count: 1,
	},
	{
		id: 2,
		brand: 'ZTE',
		category: 'Smartphone',
		title: 'Смартфон ZTE Blade V30 4/128GB, синий',
		description: {
			'Тип: ': 'Смартфон',
			'Диагональ экрана, дюймы: ': '6.67',
			'Емкость аккумулятора, мАч: ': '5000',
			'Основной материал корпуса: ': 'Пластик',
			'Беспроводные интерфейсы: ': 'Bluetooth, Wi-Fi',
		},
		price: 585.86,
		discount: 0,
		currency: 'BYN',
		src: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6087202690.jpg',
		isChoise: true,
		count: 1,
	},
];

export default function cartReducer(state = initialState, action) {
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
}
