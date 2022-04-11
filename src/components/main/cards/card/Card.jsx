import React from 'react';
import s from './Card.module.css';

const Card = (props) => {
	const { image, title } = props;

	return (
		<div className={s.wrapper}>
			<div className={s.title}>{title}</div>
			<div className={s.image}>
				<img src={image} alt="" />
			</div>
			<div className={s.link}>Shop now</div>
		</div>
	)
}

export { Card };