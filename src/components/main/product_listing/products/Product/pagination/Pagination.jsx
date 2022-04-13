import React from "react";
import s from './Pagination.module.css'

function Pagination(props) {
	const { productsPerPage, catalog, currentPage, setCurrentPage } = props;

	const pagesNumber = Math.ceil(catalog.length / productsPerPage);
	const pages = [];

	for (let i = 1; i <= pagesNumber;) {
		pages.push(i++);
	}

	return (
		<div className={s.pagination}>
			<div className={s.previous} onClick={() =>
				currentPage > 1
					? setCurrentPage(currentPage - 1)
					: null}>Previous</div>
			{pages.map((page, index) => <div
				key={index}
				className={
					currentPage === page
						? s.current__page
						: s.page}
				onClick={() => setCurrentPage(page)}>{page}</div>)}
			<div className={s.next} onClick={() =>
				currentPage < pagesNumber
					? setCurrentPage(currentPage + 1)
					: null}>Next</div>
		</div>
	);
};

export { Pagination };