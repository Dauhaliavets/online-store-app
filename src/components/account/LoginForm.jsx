import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import s from './LoginForm.module.css';
import logo from '../../assets/images/logo-dark.png';

const LoginForm = () => {
	const {
		register,
		formState: {
			errors,
			isValid
		},
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" });

	return (
		<div className={s.wrapper}>
			<img
				className={s.logo}
				src={logo}
				alt="logo"
			/>
			<form className={s.form} onSubmit={handleSubmit(() => reset())}>
				<h2 className={s.title}>Sign-In</h2>
				<div className={s.field}>
					<label htmlFor={s.email} className={s.label}>Your email</label>
					<input
						className={s.input}
						type="email"
						{...register('email', {
							required: 'Name field can not be empty',
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Wrong or Invalid email address. Please correct and try again.'
							}
						})}
					/>
					<p className={s.warning}>{errors?.email?.message}</p>
				</div>
				<div className={s.field}>
					<label htmlFor={s.password} className={s.label}>Password</label>
					<input
						className={s.input}
						type="password"
						{...register('password', {
							required: 'Name field can not be empty',
							minLength: {
								value: 8,
								message: 'Minimum 8 characters required'
							},
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
								message: 'Password must contain at least one number and uppercase characters'
							},
						})}
					/>
					<p className={s.warning}>{errors?.password?.message}</p>
				</div>
				<input className={s.button} type="submit" disabled={!isValid} value='Continue' />
			</form>
			<div className={s.subtitle}>
				<p className={s.subtitle__text}>New to Amazon?</p>
			</div>
			<NavLink to='/registration' className={s.ref_registration}><button className={s.button_grey}>Create your Amazon account</button></NavLink>
		</div>
	)
}

export default LoginForm;