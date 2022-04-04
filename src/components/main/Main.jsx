import React from 'react'
import s from './Main.module.css';
import main from '../../assets/images/main.jpg';
// import ProductListing from './product_listing/ProductListing';
import CartContainer from '../cart/CartContainer/CartContainer';

const Main = () => {
	return (
		<div className={s.wrapper}>
			{<img src={main} alt="main" /> &&
				/* <ProductListing /> */
				<CartContainer />}
		</div>
	)
}

export default Main;