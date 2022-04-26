import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";

const firebaseConfig = {
	apiKey: 'AIzaSyCuHxZgw7RqukU2sWyP-g-C7vHnxQHbV_g',
	authDomain: 'online-store-app-28967.firebaseapp.com',
	projectId: 'online-store-app-28967',
	storageBucket: 'online-store-app-28967.appspot.com',
	messagingSenderId: '241453082886',
	appId: '1:241453082886:web:e4856716932569bf231687',
	measurementId: 'G-5LXEB1GNLS'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export { firebaseConfig, app, db, auth };