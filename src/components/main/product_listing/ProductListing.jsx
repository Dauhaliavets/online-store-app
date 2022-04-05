import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ENDPOINTS, getDataFromServer } from '../../../api/server';
import sortProducts from '../../../js/sortProducts';
import { fetchProducts } from '../../../redux-store/thunk/asyncActions';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import Products from './products/Products';
import TopBar from './topBar/TopBar';

function ProductListing() {
	const OPTIONS = ["Feature", "Price Min", "Price Max", "By Discount"]
	const [sort, setSort] = useState(OPTIONS[0])
	
	const products = useSelector(state => state.products.all)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	let sortedProducts = products ? sortProducts(sort, products) : []

	return (
		<div className={s.product_listing}>
			<TopBar sort={sort}
				setSort={setSort}
				OPTIONS={OPTIONS} />
			<div className={s.main}>
				<FilterSideBar />
				<Products products={sortedProducts} />
			</div>
		</div>
	);
}

export default ProductListing;