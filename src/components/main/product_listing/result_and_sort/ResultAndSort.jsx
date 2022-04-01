import React, { useEffect, useState, useRef } from 'react'
import s from './ResultAndSort.module.css';
import arrow from '../../../../assets/icons/chevron-down 1.png'

function ResultAndSort() {
	const OPTIONS = ["Feature", "Price min", "Price Max", "Name"]
	const [isActive, setIsActive] = useState(false)
	const [sort, setSort] = useState(OPTIONS[0])
	const catMenu = useRef(null)

	const options = OPTIONS.map((option, index) => {
		return (
			<div className={s.option}
				key={index}
				onClick={(e) => {
					setSort(e.target.textContent)
					setIsActive(false)
				}}>
				{option}
			</div>
		);
	})


	useEffect(() => {
		const closeSelect = (e) => {
			if (catMenu.current && isActive && !catMenu.current.contains(e.target)) {
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
				<div className={s.select} ref={catMenu}>
					<button className={`${s.select_btn} ${isActive ? s.active : ''}`}
						onClick={() => { setIsActive(!isActive) }}>
						<span>Sort by: {sort}</span>
						<img className={isActive ? s.arrow_close : s.arrow} src={arrow} alt='arrow' />
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