import React from 'react'
import s from './Main.module.css';
import main from '../../assets/images/main.jpg';
import ProductListing from './product_listing/ProductListing';

const Main = () => {
	return (
		<div className={s.wrapper}>
			{<img src={main} alt="main" /> &&
				<ProductListing />}
		</div>
	)
}

export default Main;