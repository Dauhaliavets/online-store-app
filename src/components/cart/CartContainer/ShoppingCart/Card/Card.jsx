import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { toogleChoiseAction } from '../../../../../redux-store/actions/cartActions';
import styles from './Card.module.css';

export default function Card({ data }) {
	const [selectedOption, setSelectedOption] = useState('1');

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

	const options = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
	];
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
				<div className={styles.card_description_items}>
					{arrDescr.map((item) => {
						return <span className={styles.card_description_item}>{item}</span>;
					})}
				</div>
				<div className={styles.action_links}>
					<Select
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
					/>
					<span className={styles.action_separator}></span>
					<span className={styles.action_link_delete}>Delete</span>
				</div>
			</div>
			<div className={styles.card_price}>
				<span>{price} </span>
				<span>{currency}</span>
				<div></div>
			</div>
		</div>
	);
}
