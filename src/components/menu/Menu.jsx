import React from 'react';
import { useState } from 'react';
import Burger from './Burger';
import s from './Menu.module.css';
import burger from '../../assets/icons/burger.svg';



const Menu = () => {
	const [menuToggle, setMenuToggle] = useState(false)

	return (
		<div className={s.wrapper} >
			<div className={menuToggle ? s.blur : undefined} onClick={() => setMenuToggle(false)} />
			<Burger menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
			<div className={s.burger}>
				<img src={burger} alt="burger-icon" onClick={() => setMenuToggle(!menuToggle)} />
				<p className={s.category}>All</p>
			</div>
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