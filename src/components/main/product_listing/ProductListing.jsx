import React, { useEffect, useState } from 'react';
import { ENDPOINTS, getDataFromServer } from '../../../api/server';
import sortProducts from '../../../js/sortProducts';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import Products from './products/Products';
import TopBar from './topBar/TopBar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.js';
import { uploadDatabase } from '../../../firebase/uploadDatabase.js';

function ProductListing() {
	const OPTIONS = ["Feature", "Price Min", "Price Max", "By Discount"]
	const [sort, setSort] = useState(OPTIONS[0])
	const [products, setProducts] = useState(null)
	const [catalog, setCatalog] = useState([])

	function getCatalog() {
		const catalogCollection = collection(db, 'catalog')
		getDocs(catalogCollection)
			.then(response => {
				const result = response.docs.map(doc => ({
					data: doc.data(),
					id: doc.id
				}))
				setCatalog(result)
			})
	}

	useEffect(() => {
		getDataFromServer(ENDPOINTS.PRODUCTS)
			.then(data => {
				setProducts(data)
			})
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