import React from 'react';
import s from './Search.module.css';
import { Input } from './Input/Input';
import { Button } from './Button/Button';

const Search = () => {
	return (
		<div className={s.wrapper}>
			<Input />
			<Button />
		</div>
	)
}

export { Search };