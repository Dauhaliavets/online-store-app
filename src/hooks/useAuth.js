import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export function useAuth() {
	const [loginError, setLoginError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return {
		loginError,
		handleLogin(email, password) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					getDoc(doc(db, "users", user.uid))
						.then(response => {
							const userID = response._document.data.value.mapValue.fields;
							if (userID) {
								dispatch({
									type: 'ADD_USER', payload: {
										name: userID.name.stringValue,
										email: userID.email.stringValue,
										password: userID.password.stringValue,
										id: userID.id.stringValue,
										token: userID.token.stringValue,
									}
								})
								return navigate('/')
							}
						})
				})
				.catch(() => setLoginError(true));
		}
	}
}