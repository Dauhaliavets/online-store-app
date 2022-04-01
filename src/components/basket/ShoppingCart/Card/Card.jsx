import React from 'react';
import styles from './Card.module.css';

export default function Card({ data }) {
	const { category, currency, description, discount, id, img, price, title } = data;
	const arrDescr = [];

	for (const [key, value] of Object.entries(description)) {
		arrDescr.push(`${key} ${value}`)
	}

	return (
		<div className={styles.card_wrapper}>
			<div className={styles.card_image}>
				<img src={img} alt={title}/>
			</div>
			<div className={styles.card_description}>
				<h3 className={styles.card_description_title}>{title}</h3>
				<div className={styles.card_description_body}>{arrDescr}</div>
			</div>
			<div className={styles.card_price}>
				<span>{price} </span>
				<span>{currency}</span>
			</div>
		</div>
	)
}
