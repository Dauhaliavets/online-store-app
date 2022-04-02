import React, { useState } from 'react';
import s from './Account.module.css';
import arrow from '../../assets/icons/arrow.svg';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';



const Account = () => {
	const [popupToggle, setPopupToggle] = useState(false)
	const [formToggle, setFormToggle] = useState(false)
	const [loginFormToggle, setLoginFormToggle] = useState(false)

	return (
		<div className={s.wrapper}>
			<div className={s.main} onClick={() => setPopupToggle(!popupToggle)}>
				<p className={s.greeting}>Hello, Sign in</p>
				<p className={s.info}>Accounts & Lists</p>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
			<div className={popupToggle ? s.popup : s.popup__off}>
				<div className={s.triangle}></div>
				<button className={s.button} onClick={() => setLoginFormToggle(!loginFormToggle)}>Sign in</button>
				<p className={s.text}>New customer? <button className={s.link} onClick={() => setFormToggle(!formToggle)}>Start here</button></p>
			</div>
			<RegistrationForm formToggle={formToggle} setFormToggle={setFormToggle} />
			<LoginForm loginFormToggle={loginFormToggle} setLoginFormToggle={setLoginFormToggle} />
		</div>
	)
}

export default Account;