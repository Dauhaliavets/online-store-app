import React from 'react';
import s from './Select.module.css';

const Select = () => {
	return (
		<select className={s.select}>
			<option>All</option>
			<option>Computers</option>
			<option>Notebooks</option>
			<option>Phones</option>
			<option>Television</option>
			<option>Accessories</option>
		</select>
	)
}

export default Select;