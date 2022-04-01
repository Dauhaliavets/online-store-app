import React from 'react';
import s from './RegistrationForm.module.css';
import logo from '../../assets/images/logo-dark.png';



const RegistrationForm = () => {
	return (
		<div className={s.wrapper}>
			<img className={s.logo} src={logo} alt="logo" />
			<form className={s.form}>
				<h2 className={s.title}>Create account</h2>
				<div className={s.field}>
					<label for={s.name} className={s.label}>Your name</label>
					<input className={s.input} type="text" maxLength='50' />
				</div>
				<div className={s.field}>
					<label for={s.email} className={s.label}>Your email</label>
					<input className={s.input} type="email" />
				</div>
				<div className={s.field}>
					<label for={s.password} className={s.label}>Password</label>
					<input className={s.input} type="password" />
					<p className={s.warning}>Passwords must be at least 6 characters</p>
				</div>
				<div className={s.field}>
					<label for={s.password} className={s.label}>Re-enter password</label>
					<input className={s.input} type="password" />
				</div>
				<button className={s.button} type='submit'>Continue</button>
			</form>
		</div>
	)
}

export default RegistrationForm;