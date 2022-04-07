import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Warning from './Warning';
import logo from '../../assets/images/logo-dark.png';
import s from './LoginForm.module.css';

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loginError, setLoginError] = useState(false);

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

	function handleLogin(email, password) {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				getDoc(doc(db, "users", user.uid))
					.then(response => {
						const userID = response._document.data.value.mapValue.fields;
						if (userID) {
							dispatch({
								type: 'ADD_USER', payload: {
									name: userID.name.stringValue,
									email: userID.email.stringValue,
									password: userID.password.stringValue,
									id: userID.id.stringValue,
									token: userID.token.stringValue,
								}
							})
							return navigate('/')
						}
					})
			})
			.catch(() => setLoginError(true));
	}

	return (
		<div className={s.wrapper}>
			<Link to='/'><img src={logo} alt="logo" /></Link>
			{loginError ? <Warning /> : null}
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
				<input className={s.button} type="submit" disabled={!isValid} value='Continue' onClick={() => handleLogin(watch("email"), watch("password"))} />
			</form>
			<div className={s.subtitle}>
				<p className={s.subtitle__text}>New to Amazon?</p>
			</div>
			<Link to='/registration' className={s.button_grey}>Create your Amazon account</Link>
		</div>
	)
}

export default LoginForm;