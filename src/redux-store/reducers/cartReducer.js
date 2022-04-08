import {
	TOGGLE_CHOISE,
	CHANGE_COUNT,
	DELETE_CARD,
	CART_ADD_PRODUCT
} from '../actions/cartActions';

const initialState = [
	{
		id: 4,
		category: 'Laptop',
		title:
			'15.6" Ноутбук Haier U1520EM, Intel Celeron N4020 (1.1 ГГц), RAM 4 ГБ, eMMC 64 ГБ, Intel HD Graphics 600, Windows Home, (JM02VSE09RU), серебристый',
		description: {
			'Процессор: ': 'Intel Celeron N4020 (1.1 ГГц)',
			'Оперативная память: ': '4 ГБ',
			'Общий объем eMMC, ГБ: ': '64',
			'Видеокарта: ': 'Intel HD Graphics 600',
			'Операционная система: ': 'Windows Home',
		},
		price: 932.47,
		discount: 10,
		currency: 'BYN',
		img: 'https://cdn1.ozone.ru/s3/multimedia-a/wc250/6141818158.jpg',
		isChoise: true,
		count: 3,
	},
	{
		id: 5,
		category: 'Laptop',
		title:
			'15.6" Ноутбук Acer Extensa 15 EX215-22-R2BT, AMD Athlon Silver 3050U (2.3 ГГц), RAM 4 ГБ, SSD 128 ГБ, AMD Radeon Graphics, Без системы, (NX.EG9ER.00T)',
		description: {
			'Процессор: ': 'AMD Athlon Silver 3050U (2.3 ГГц)',
			'Оперативная память: ': '4 ГБ',
			'Общий объем SSD, ГБ: ': '128',
			'Видеокарта: ': 'AMD Radeon Graphics',
			'Операционная система: ': 'Без системы',
		},
		price: 1214.79,
		discount: 0,
		currency: 'BYN',
		img: 'https://cdn1.ozone.ru/s3/multimedia-6/wc250/6026640582.jpg',
		isChoise: false,
		count: 2,
	},
	{
		id: 6,
		category: 'Laptop',
		title:
			'17.3" Ноутбук Lenovo IdeaPad 3 17ADA05, AMD Athlon Gold 3150U (2.4 ГГц), RAM 4 ГБ, SSD 128 ГБ, AMD Radeon Graphics, Windows Home, (81W20091RU), серый',
		description: {
			'Процессор: ': 'AMD Athlon Gold 3150U (2.4 ГГц)',
			'Оперативная память: ': '4 ГБ',
			'Общий объем SSD, ГБ: ': '128',
			'Видеокарта: ': 'AMD Radeon Graphics',
			'Операционная система: ': 'Windows Home',
		},
		price: 1572.06,
		discount: 5,
		currency: 'BYN',
		img: 'https://cdn1.ozone.ru/s3/multimedia-i/wc250/6155684538.jpg',
		isChoise: true,
		count: 1,
	},
	{
		id: 7,
		category: 'Laptop',
		title:
			'14" Ноутбук Echips Lite, HD 1366х768, 240Gb, Intel Celeron J4005 (2.0 ГГц), RAM 8 ГБ, SSD, Intel HD Graphics 600, Windows Pro',
		description: {
			'Процессор: ': 'Intel Celeron J4005 (2.0 ГГц)',
			'Оперативная память: ': '8 ГБ',
			'Общий объем SSD, ГБ: ': '240',
			'Видеокарта: ': 'Intel HD Graphics 600',
			'Операционная система: ': 'Windows Pro',
		},
		price: 1420.69,
		discount: 15,
		currency: 'BYN',
		img: 'https://cdn1.ozone.ru/s3/multimedia-a/wc250/6255363850.jpg',
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
					return item.id !== action.payload
				}),
			];
		case CART_ADD_PRODUCT:
			return [...state, action.payload]

		default:
			return state;
	}
}
