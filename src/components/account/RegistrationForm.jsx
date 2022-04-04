import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import s from './RegistrationForm.module.css';
import logo from '../../assets/images/logo-dark.png';

const RegistrationForm = () => {
	const {
		register,
		formState: {
			errors,
			isValid
		},
		handleSubmit,
		reset,
		watch
	} = useForm({ mode: "onBlur" });

	return (
		<div className={s.wrapper}>
			<NavLink to='/' className={s.logo}>
				<img
					className={s.logo}
					src={logo}
					alt="logo"
				/>
			</NavLink>
			<form className={s.form} onSubmit={handleSubmit(() => reset())}>
				<h2 className={s.title}>Create account</h2>
				<div className={s.field}>
					<label htmlFor={s.name} className={s.label}>Your name</label>
					<input
						className={s.input}
						{...register('name', {
							required: 'Name field can not be empty',
							minLength: {
								value: 6,
								message: 'Minimum 6 characters required'
							},
							maxLength: {
								value: 20,
								message: 'Maximum 20 characters'
							}
						})}
					/>
					<p className={s.warning}>{errors?.name?.message}</p>
				</div>
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
				<div className={s.field}>
					<label htmlFor={s.password} className={s.label}>Re-enter password</label>
					<input
						className={s.input}
						type="password"
						{...register('password_repeat', {
							required: 'Name field can not be empty',
							minLength: {
								value: 8,
								message: 'Minimum 8 characters required'
							},
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
								message: 'Password must contain at least one number and uppercase characters'
							},
							validate: value =>
								value === watch("password") || 'Passwords must match'
						})}
					/>
					<p className={s.warning}>{errors?.password_repeat?.message}</p>
				</div>
				<input className={s.button} type="submit" disabled={!isValid} value='Continue' />
				<p className={s.text}>Already have an account? <NavLink to='/authorization' className={s.link}>Start here</NavLink></p>
			</form>
		</div>
	)
}

export default RegistrationForm;