import React from 'react'
import s from './ProductListing.module.css';
import ResultAndSort from './topBar/TopBar';

function ProductListing() {
	return (
		<div className={s.product_listing}>
			<ResultAndSort />
		</div>
	);
}

export default ProductListing;