import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import s from './Modal.module.css';

function ModalContainer({ success, data, toggleOpenModal }) {
	if (success) {
		const closeAndRedirect = () => {
			toggleOpenModal();
			return <Link to='/cart/order'></Link>
			// return <Navigate replace to='/' />;
		};
		return (
			<Modal
				title={`Success!!! Dear, ${data.name}!`}
				content={`Your order in the amount of ${data.totalPrice} BYN has been sent to the address ${data.address}.\n\r Detailed instructions have been sent to your email: ${data.email}.`}
				closeModal={() => closeAndRedirect()}
			/>
		);
	}
	return (
		<Modal
			title={'Failure!!!'}
			content={'SecretKey incorrect'}
			closeModal={toggleOpenModal}
		/>
	);
}

function Modal({ title, content, closeModal }) {
	return (
		<div className={s.modal_layout}>
			<div className={s.modal_wrapper}>
				<div className={s.modal_header}>
					<h2 className={s.modal_title}>{title}</h2>
					<div className={s.modal_close}>x</div>
				</div>
				<div className={s.modal_content}>{content}</div>
				<div className={s.modal_button} onClick={() => closeModal()}>
					Ok
				</div>
			</div>
		</div>
	);
}

export { ModalContainer };
