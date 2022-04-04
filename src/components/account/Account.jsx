import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Account.module.css';
import arrow from '../../assets/icons/arrow.svg';

const Account = () => {
	const [popupToggle, setPopupToggle] = useState(false)
	const [formToggle, setFormToggle] = useState(false)
	const [loginFormToggle, setLoginFormToggle] = useState(false)

	return (
		<div className={s.wrapper} onClick={() => setPopupToggle(!popupToggle)}>
			<div className={popupToggle ? s.blur : undefined} />
			<div className={s.main} >
				<p className={s.greeting}>Hello, Sign in</p>
				<p className={s.info}>Accounts & Lists</p>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
			<div className={popupToggle ? s.popup : s.popup__off}>
				<div className={s.triangle}></div>
				<NavLink to='/authorization' className={s.ref_login}><button className={s.button} onClick={() => setLoginFormToggle(!loginFormToggle)}>Sign in</button></NavLink>
				<p className={s.text}>New customer? <button className={s.link} onClick={() => setFormToggle(!formToggle)}><NavLink to='/registration' className={s.ref_registration}>Start here</NavLink></button></p>
			</div>
		</div>
	)
}

export default Account;