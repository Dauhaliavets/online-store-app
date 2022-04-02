import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../js/api';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import Products from './products/Products';
import TopBar from './topBar/TopBar';

function ProductListing() {	
	const OPTIONS = ["Feature", "Price Min", "Price Max", "By Discount"]
	const [sort, setSort] = useState(OPTIONS[0])
	const [products, setProducts] = useState(null)

	let sortedProducts = products

	useEffect(() => {
		getAllProducts()
			.then(data => {
				setProducts(data)
			})
	},[])

	if (!sortedProducts) return "Not found"

	switch(sort) {
		case "Feature":
			sortedProducts = [...products].reverse()
			break
		case "Price Min":
			sortedProducts = [...products].sort((prev, next) => {
				if (prev.price > next.price) return 1
				if (prev.price === next.price) return 0
				if (prev.price < next.price) return -1
			})
			break
		case "Price Max":
			sortedProducts = [...products].sort((prev, next) => {
				if (prev.price < next.price) return 1
				if (prev.price === next.price) return 0
				if (prev.price > next.price) return -1
			})
			break
		case "By Discount":
			sortedProducts = [...products].sort((prev, next) => {
				if (prev.discount < next.discount) return 1
				if (prev.discount === next.discount) return 0
				if (prev.discount > next.discount) return -1
			})
			break
	}

	return (
		<div className={s.product_listing}>
			<TopBar sort={sort}
			setSort={setSort}
			OPTIONS={OPTIONS}/>
			<div className={s.main}>
				<FilterSideBar />
				<Products products={sortedProducts}/>
			</div>
		</div>
	);
}

export default ProductListing;