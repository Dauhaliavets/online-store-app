import React from 'react';
import { useSelector } from 'react-redux';
import s from './Burger.module.css';
import close from '../../assets/icons/close.svg';

const Burger = ({ menuToggle, setMenuToggle }) => {
	const user = useSelector(state => state.user);

	return (
		<div className={menuToggle ? s.active : s.menu} >
			<div className={menuToggle ? s.blur : undefined} onClick={() => setMenuToggle(false)} />
			<img className={s.close} src={close} alt="close-icon" onClick={() => setMenuToggle(false)} />
			<h2 className={s.account}>Hello, {user.name ? user.name : 'Sign in'}</h2>
			<nav className={s.body}>
				<ul className={s.list}>
					<li className={s.link}>Computer</li>
					<li className={s.link}>Notebooks</li>
					<li className={s.link}>Phones</li>
					<li className={s.link}>Television</li>
					<li className={s.link}>Accessories</li>
					<li className={s.link}>Headphones</li>
					<li className={s.link}>Home Audio</li>
					<li className={s.link}>Office Electronics</li>
					<li className={s.link}>Video Game Consoles</li>
				</ul>
			</nav>
		</div>
	)
}

export default Burger;