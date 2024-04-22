import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBpJaTYDTJkE8lQxoZBtFXc9jzipXVOrF0',
	authDomain: 'nine-academy-1.firebaseapp.com',
	projectId: 'nine-academy-1',
	storageBucket: 'nine-academy-1.appspot.com',
	messagingSenderId: '881761340632',
	appId: '1:881761340632:web:c387a0494cbc27fe525bad',
	measurementId: 'G-RK0KPZPP84'
};

export function getFirebaseApp() {
	return getApps().length ? getApp() : initializeApp(firebaseConfig);
}