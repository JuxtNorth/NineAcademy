import { initializeApp, getApps, getApp } from 'firebase/app';
import {
	getAuth,
	isSignInWithEmailLink,
	onAuthStateChanged,
	signInWithEmailLink,
	signInWithPopup,
	signOut,
	type AuthProvider
} from 'firebase/auth';
import { alert, user } from '$lib/stores';
import { goto } from '$app/navigation';
import { firebaseConfig } from '$constants';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

export function getFirebaseApp() {
	let app = getApps().length ? getApp() : null;
	if (app !== null) return app;
	app = initializeApp(firebaseConfig);
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdzUccpAAAAAAiUKXTzrapoOoJZXpvZllQDoaRA'),
    isTokenAutoRefreshEnabled: true,
  });
	return app;
}

export function createUser() {}

export async function signInWithProvider(provider: AuthProvider) {
	const auth = getAuth(getFirebaseApp());
	try {
		const result = await signInWithPopup(auth, provider);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

export async function handleSignInWithEmail() {
	const auth = getAuth(getFirebaseApp());
	if (isSignInWithEmailLink(auth, window.location.href)) {
		const email = window.localStorage.getItem('emailForSignIn');
		if (email) {
			try {
				const result = await signInWithEmailLink(auth, email, window.location.href);
				window.localStorage.removeItem('emailForSignIn');
				alert.set({
					title: 'Sign in Success',
					description: 'Now you can access and purchase courses',
					type: 'info'
				});
				console.log(result);
			} catch (error) {
				console.error(error);
			}
		}
	}
}

export function observeAuthStateChange() {
	const auth = getAuth();
	onAuthStateChanged(auth, (newUser) => {
		if (newUser) {
			user.set(newUser);
			if (window.location.pathname === '/signin') goto('/');
		} else {
			user.set(null);
		}
	});
}

export async function signOutUser() {
	const auth = getAuth(getFirebaseApp());
	try {
		await signOut(auth);
		user.set(null);
		alert.set({
			title: 'Signed out',
			description: 'Goodbye!',
			type: 'info'
		});
	} catch (error) {
		console.error(error);
		alert.set({
			title: 'Failed to Sign Out',
			description: 'An unknown error has occured',
			type: 'error'
		});
	}
}

export async function getFirestoreDoc(path: string) {
	const db = getFirestore(getFirebaseApp());
	try {
		const docRef = doc(db, path);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data();
		}
	} catch (error) {
		console.error(error);
		alert.set({
			title: 'Failed to fetch document',
			description: 'An error has occured while trying to access this resource',
			type: 'error'
		});
	}
}
