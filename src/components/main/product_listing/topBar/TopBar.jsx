import React, { useEffect, useState, useRef } from 'react'
import s from './TopBar.module.css';
import arrow from '../../../../assets/icons/chevron-down 1.png'
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../../redux-store/actions/productsActions';

function ResultAndSort() {
	const dispatch = useDispatch()
	const OPTIONS = ["Feature", "Price Min", "Price Max", "By Discount"]
	const sort = useSelector(state => state.products.sort)
	const [isActive, setIsActive] = useState(false)
	const selectEl = useRef(null)

	const options = OPTIONS.map((option) => {
		return (
			<div className={s.option}
				key={option}
				onClick={(e) => {
					dispatch(setSort(e.target.textContent))
					setIsActive(false)
				}}>
				{option}
			</div>
		);
	})

	useEffect(() => {
		const closeSelect = (e) => {
			const isNeedCloseSelect = selectEl.current && isActive && !selectEl.current.contains(e.target)
			if(isNeedCloseSelect){
				setIsActive(false)
			}
		}
		document.addEventListener('click', closeSelect)

		return () => {
			document.removeEventListener('click', closeSelect)
		}
	}, [isActive])

	return (
		<>
			<div className={s.wrapper}>
				<div className={s.results}>
					<span>1-16 of over 2,000 results for <span className={s.user_request}>"phone"</span></span>
				</div>
				<div className={s.select} ref={selectEl}>
					<button className={`${s.select_btn} ${isActive ? s.active : ''}` }
					onClick={() => {setIsActive(!isActive)}}>
						<span>Sort by: {sort}</span> 
						<img className={isActive ? s.arrow_close : s.arrow} 
						src={arrow}
						alt=''/>
					</button>
					<div className={`${s.options} ${isActive ? s.active : ''}`}>
						{options}
					</div>
				</div>
			</div>
		</>
	);
}

export default ResultAndSort;