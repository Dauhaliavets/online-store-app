import React from 'react';
import s from './Menu.module.css';



const Menu = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.burger}>All</div>
			<div className={s.categories}>
				<div className={s.category}>Computer</div>
				<div className={s.category}>Notebooks</div>
				<div className={s.category}>Phones</div>
				<div className={s.category}>Television</div>
				<div className={s.category}>Accessories</div>
			</div>
		</div>
	)
}

export default Menu;