import React, { useState } from 'react';
import s from './Search.module.css';
import { Input } from './Input/Input';
import { Button } from './Button/Button';
import { useDispatch } from 'react-redux';
import { setSearchQuery as setSearchFilter } from '../../redux-store/actions/productsActions';

const Search = () => {
	const dispatch = useDispatch()
	const [searchQuery, setSearchQuery] = useState("")

	return (
		<form className={s.wrapper} onSubmit={(e) => {
			e.preventDefault()
			dispatch(setSearchFilter(searchQuery))
			setSearchQuery("")
		}}>
			<Input inputValue={searchQuery} setInputValue={setSearchQuery}/>
			<Button />
		</form>
	)
}

export { Search };