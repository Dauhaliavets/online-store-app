import React, { useState } from 'react';
import s from './Account.module.css';
import arrow from '../../assets/icons/arrow.svg';



const Account = () => {
	const [popup, setPopup] = useState(false)

	return (
		<div className={s.wrapper}>
			<div className={s.main} onClick={() => setPopup(!popup)}>
				<p className={s.greeting}>Hello, Sign in</p>
				<p className={s.info}>Accounts & Lists</p>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
			<div className={popup ? s.popup : s.popup__off}>
				<div className={s.triangle}></div>
				<button className={s.button}>Sign in</button>
				<p className={s.text}>New customer? <button className={s.link}>Start here</button></p>
			</div>
		</div>
	)
}

export default Account;