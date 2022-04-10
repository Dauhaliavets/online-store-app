import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import s from './OrderForm.module.css';

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className={s.text_input}>
			<div className={s.label}>
				<label htmlFor={props.id || props.name}>{label}</label>
				{meta.touched && meta.error ? (
					<div className={s.error}>{meta.error}</div>
				) : (
					'✓'
				)}
			</div>
			<input className={s.input} {...field} {...props} />
		</div>
	);
};

const OrderForm = () => {
	return (
		<div>
			<Formik
				initialValues={{
					address: '',
					secretKey: '',
				}}
				validationSchema={Yup.object({
					address: Yup.string()
						.min(3, 'Address length must be more 3 characters')
						.required('Required'),
					secretKey: Yup.string()
						.length(4, 'secretKey must contain 4 characters')
						.matches(/[0-9]{4}/, 'secretKey must contain characters [0-9]')
						.required('Required'),
				})}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ dirty, isValid }) => (
					<Form className={s.confirmForm}>
						<TextInput
							label='Enter your address:'
							name='address'
							type='text'
							placeholder='Address'
						/>
						<TextInput
							label='Enter your secretKey:'
							name='secretKey'
							type='text'
							placeholder='Secret'
						/>
						<button className={s.form_button} type='submit' disabled={!(dirty && isValid)}>
							Confirm
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export { OrderForm };
