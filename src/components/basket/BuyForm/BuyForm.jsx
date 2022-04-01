import React from 'react'
import SubTotal from '../SubTotal/SubTotal'
import styles from './BuyForm.module.css'

export default function BuyBox() {

	return (
		<div className={styles.wrapper}>
			<form>
				<SubTotal />
				<button className={styles.button}>{'Buy now'}</button>
			</form>
		</div>
	)
}


