import React from 'react';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import Products from './products/Products';
import TopBar from './topBar/TopBar';

function ProductListing() {
	return (
		<div className={s.product_listing}>
			<TopBar />
			<div className={s.main}>
				<FilterSideBar />
				<Products />
			</div>
		</div>
	);
}

export default ProductListing;