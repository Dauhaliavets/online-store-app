import React from 'react'
import { Outlet } from 'react-router-dom';
import s from './Main.module.css';
import { MainSlider } from './slider/MainSlider';

const Main = () => {
	return (
		<div className={s.wrapper}>
			<MainSlider />
			<Outlet />
		</div>
	)
}

export { Main };