import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.js';

function getDatabase() {
	const databaseCollection = collection(db, 'catalog');
	getDocs(databaseCollection)
		.then(response => {
			const result = response.docs.map(doc => ({
				data: doc.data(),
				id: doc.id
			}))
		})
}