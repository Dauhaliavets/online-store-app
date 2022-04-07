import React from 'react';
import s from './Warning.module.css';

const Warning = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>There was a problem</div>
			<div className={s.subtitle}>We cannot find an account with that email address</div>
		</div>
	)
}

export default Warning