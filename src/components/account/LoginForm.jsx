import React from 'react';
import { useForm } from 'react-hook-form';
import s from './LoginForm.module.css';
import logo from '../../assets/images/logo-dark.png';
import close from '../../assets/icons/close-dark.svg';


const LoginForm = ({ loginFormToggle, setLoginFormToggle }) => {
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
		<div className={loginFormToggle ? s.wrapper : s.wrapper__off}>
			<img
				className={s.close}
				src={close}
				alt="close-icon"
				onClick={() => setLoginFormToggle(!loginFormToggle)}
			/>
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
			<button className={s.button_grey}>Create your Amazon account</button>
		</div>
	)
}

export default LoginForm;