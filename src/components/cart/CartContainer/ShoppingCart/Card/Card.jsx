import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {
	toogleChoiseAction,
	changeCountAction,
} from '../../../../../redux-store/actions/cartActions';
import s from './Card.module.css';

const options = [
	{ value: '1', label: '1' },
	{ value: '2', label: '2' },
	{ value: '3', label: '3' },
	{ value: '4', label: '4' },
	{ value: '5', label: '5' },
];

export default function Card({
	data: {
		category,
		currency,
		description,
		discount,
		id,
		img,
		price,
		title,
		isChoise,
		count,
	},
}) {
	const arrDescr = [];

	const [selectedOption, setSelectedOption] = useState(count);
	const dispatch = useDispatch();

	const defaultValueSelect = options.filter(
		(option) => +option.value === count
	);

	for (const [key, value] of Object.entries(description)) {
		arrDescr.push(`${key} ${value}`);
	}

	const toggleChoise = (cardId) => dispatch(toogleChoiseAction(cardId));
	const changeCount = (id, count) =>
		dispatch(changeCountAction({ id: id, newCount: count }));

	return (
		<div className={s.card_wrapper}>
			<div className={s.card_toggle_box}>
				{isChoise ? (
					<span
						className={s.card_choised}
						onClick={() => toggleChoise(id)}
					></span>
				) : (
					<span
						className={s.card_unchoised}
						onClick={() => toggleChoise(id)}
					></span>
				)}
			</div>
			<div className={s.card_image}>
				<img src={img} alt={title} />
			</div>
			<div className={s.card_description}>
				<h3 className={s.card_description_title}>{title}</h3>
				<div className={s.card_description_items}>
					{arrDescr.map((item) => {
						return (
							<span key={item} className={s.card_description_item}>
								{item}
							</span>
						);
					})}
				</div>
				<div className={s.action_links}>
					<Select
						defaultValue={defaultValueSelect}
						onChange={(event) => {
							changeCount(id, event.value);
							setSelectedOption(event);
						}}
						options={options}
					/>
					<span className={s.action_separator}></span>
					<span className={s.action_link_delete}>Delete</span>
				</div>
			</div>
			<div className={s.card_price}>
				<span>{price} </span>
				<span>{currency}</span>
				<div></div>
			</div>
		</div>
	);
}
