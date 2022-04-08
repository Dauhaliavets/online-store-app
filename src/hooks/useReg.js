import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useReg() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector(state => state.cart);

	return {
		handleRegistration(name, email, password) {
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					if (user) {
						dispatch({
							type: 'ADD_USER', payload: {
								name: name,
								email: email,
								password: password,
								id: user.uid,
								token: user.accessToken,
								cart: cart
							}
						})
						setDoc(doc(db, "users", user.uid), {
							name: name,
							email: email,
							password: password,
							id: user.uid,
							token: user.accessToken,
						});
						return navigate('/')
					}
				})
		}
	}
}

