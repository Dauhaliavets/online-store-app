import React from 'react';
import s from './Account.module.css';



const Account = () => {
	return (
		<div className={s.wrapper}>
			<p className={s.greeting}>Hello, John!</p>
			<p className={s.info}>Accounts & Lists</p>
		</div>
	)
}

export default Account;