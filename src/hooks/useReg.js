import { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useReg() {
	const [registrationError, setRegistrationError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return {
		registrationError,
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
				.catch(() => setRegistrationError(true));
		}
	}
}

