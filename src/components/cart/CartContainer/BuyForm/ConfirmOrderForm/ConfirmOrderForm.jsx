import { Formik, Form, useField } from 'formik';
import React from 'react';
import s from './ConfirmOrderForm.module.css';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label className={s.label} htmlFor={props.id || props.name}>{label}</label>
			<input className={s.text_input} {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={s.error}>{meta.error}</div>
			) : null}
		</>
	);
};

export default function ConfirmOrderForm() {
	return (
		<div className={s.confirm_order_wrapper}>
			<Formik
				initialValues={{ address: '', email: '', secretKey: '' }}
				validationSchema={Yup.object({
					address: Yup.string()
						.min(3, 'Address length must be more 3 characters')
						.required('Required'),
					email: Yup.string().email('Incorrect password').required('Required'),
					secretKey: Yup.string()
						.length(4, 'secretKey must contain 4 characters')
						.matches(/[0-9]{4}/, 'secretKey must contain characters [0-9]')
						.required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form className={s.confirmForm}>
						<TextInput
							label='Your address'
							name='address'
							type='text'
							placeholder='Address'
						/>
						<TextInput
							label='Your email'
							name='email'
							type='email'
							placeholder='Email'
						/>
						<TextInput
							label='Your secretKey'
							name='secretKey'
							type='text'
							placeholder='Secret'
						/>
						<button type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
