import React, { useEffect, useState } from 'react';
import SubTotal from '../SubTotal/SubTotal';
import Card from './Card/Card';
import Preloader from './Preloader/Preloader';
import styles from './ShoppingCart.module.css';

const getData = async () => {
	let response = await fetch('http://localhost:3500/products');
	let data = await response.json();
	return data;
};

export default function ShoppingCart() {
	const [data, setData] = useState(null);
	const [cards, setCards] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		getData().then((data) => setData(data.splice(5, 7)));
	}, []);
	
	useEffect(() => {
		if(data) {
			setCards(getCards(data));
			setTotalPrice(getTotalPrice(data));
		}
	}, [data])

	const getCards = data => data.map((item, index) => <Card key={index} data={item}/>);
	const getTotalPrice = data => data.reduce((acc, cur) => {
		acc = acc + +cur.price
		return +(acc.toFixed(2))
	}, 0)

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>ShoppingCart</h3>
			{
				data 
					? cards
					: <Preloader />
			}
			<SubTotal totalPrice={totalPrice} countItems={cards.length} />
		</div>
	);
}
