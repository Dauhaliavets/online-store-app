import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';
import { database } from './database.js';

export function uploadDatabase() {
	addDoc(collection(db, "catalog"), database);
}