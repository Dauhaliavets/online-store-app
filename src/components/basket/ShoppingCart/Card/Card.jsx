import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleChoiseAction } from '../../../../redux-store/actions/cartActions';
import styles from './Card.module.css';

export default function Card({ data }) {
	const dispatch = useDispatch();
	const {
		category,
		currency,
		description,
		discount,
		id,
		img,
		price,
		title,
		isChoise,
	} = data;
	const arrDescr = [];

	for (const [key, value] of Object.entries(description)) {
		arrDescr.push(`${key} ${value}`);
	}

	const toggleChoise = (cardId) => dispatch(toogleChoiseAction(cardId));

	return (
		<div className={styles.card_wrapper}>
			<div className={styles.card_toggle_box}>
				{isChoise ? (
					<span
						className={styles.card_choised}
						onClick={() => toggleChoise(id)}
					></span>
				) : (
					<span
						className={styles.card_unchoised}
						onClick={() => toggleChoise(id)}
					></span>
				)}
			</div>

			<div className={styles.card_image}>
				<img src={img} alt={title} />
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
	);
}
