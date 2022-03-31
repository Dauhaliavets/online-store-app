import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import Form from '../search/Form';
import Account from '../account/Account';



const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.main}>
				<div className={s.logo}><img src={logo} alt="logo" /></div>
				<Form />
				<Account />
			</div>
		</div>
	)
}

export default Header;