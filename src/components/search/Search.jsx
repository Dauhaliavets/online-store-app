import React from 'react';
import s from './Search.module.css';
import Select from './Select';
import Input from './Input';
import Button from './Button';

const Search = () => {
	return (
		<div className={s.wrapper}>
			<Select />
			<Input />
			<Button />
		</div>
	)
}

export default Search;