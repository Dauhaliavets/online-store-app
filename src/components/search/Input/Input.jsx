import React from 'react';
import s from './Input.module.css';

const Input = () => {
	return (
		<input
			className={s.input}
			type="text"
			placeholder='Search...'
		/>
	)
}

export { Input };