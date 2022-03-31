import React from 'react'
import s from './Main.module.css';
import main from '../../assets/images/main.jpg';



const Main = () => {
	return (
		<div className={s.wrapper}>
			<img src={main} alt="main" />
		</div>
	)
}

export default Main;