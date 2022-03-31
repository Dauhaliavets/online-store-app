import React from 'react';
import s from './Form.module.css';
import Select from './Select';
import Input from './Input';
import Button from './Button';



const Form = () => {
	return (
		<div className={s.wrapper}>
			<Select />
			<Input />
			<Button />
		</div>
	)
}

export default Form;