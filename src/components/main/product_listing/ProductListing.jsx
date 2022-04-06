import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux-store/thunk/asyncActions';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import Products from './products/Products';
import TopBar from './topBar/TopBar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.js';
import { uploadDatabase } from '../../../firebase/uploadDatabase.js';

function ProductListing() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	})


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