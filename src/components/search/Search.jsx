import React from 'react';
import s from './Search.module.css';
import { Select } from './Select/Select';
import { Input } from './Input/Input';
import { Button } from './Button/Button';

const Search = () => {
	return (
		<div className={s.wrapper}>
			<Select />
			<Input />
			<Button />
		</div>
	)
}

export { Search };