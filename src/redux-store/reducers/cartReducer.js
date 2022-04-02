import { TOGGLE_CHOISE } from "../actions/cartActions";

const initialState = [
		{
			"id": 0,
			"category": "Laptop",
			"title": "11.6\" Ноутбук Asus L210MA-GJ243T, Intel Celeron N4020 (1.1 ГГц), RAM 4 ГБ, eMMC 128 ГБ, Intel UHD Graphics 600, Windows Home, (90NB0R41-M09020), синий",
			"description": {
				"Процессор: ": "Intel Celeron N4020 (1.1 ГГц)",
				"Оперативная память: ": "4 ГБ",
				"Общий объем eMMC, ГБ: ": "128",
				"Видеокарта: ": "Intel UHD Graphics 600",
				"Операционная система: ": "Windows Home"
			},
			"price": 983.7,
			"discount": 0,
			"currency": "BYN",
			"img": "https://cdn1.ozone.ru/s3/multimedia-l/wc250/6260084541.jpg",
			isChoise: true,
		},
		{
			"id": 1,
			"category": "Laptop",
			"title": "14\" Ноутбук Lenovo IdeaPad 1 14IGL05, Intel Celeron N4020 (1.1 ГГц), RAM 4 ГБ, SSD 128 ГБ, Intel UHD Graphics 605, Windows Home, (81VU007XRU), серый",
			"description": {
				"Процессор: ": "Intel Celeron N4020 (1.1 ГГц)",
				"Оперативная память: ": "4 ГБ",
				"Общий объем SSD, ГБ: ": "128",
				"Видеокарта: ": "Intel UHD Graphics 605",
				"Операционная система: ": "Windows Home"
			},
			"price": 1150.21,
			"discount": 0,
			"currency": "BYN",
			"img": "https://cdn1.ozone.ru/s3/multimedia-j/wc250/6127326511.jpg",
			isChoise: true,
		}
]

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_CHOISE:
			return {
				...state,

			};
	
		default:
			return state;
	}
}