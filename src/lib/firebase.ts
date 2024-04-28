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
import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';

export function getFirebaseApp() {
	return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export async function createUser(uid: string, username: string | null = '') {
	const db = getFirestore(getFirebaseApp());
	try {
		const docRef = doc(db, `users/${uid}`);
		// Check if user exists
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			await setDoc(docRef, { username, courses: [] });
		}
	} catch (error) {
		console.error(error);
	}
}

export async function purchaseCourse(uid: string, courseId: string) {
	const db = getFirestore(getFirebaseApp());
	try {
		setDoc(doc(db, `users/${uid}`), {
			purchases: arrayUnion(courseId)
		});
	} catch (error) {
		console.error(error);
	}
}

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
	onAuthStateChanged(auth, async (newUser) => {
		if (newUser) {
			user.set(newUser);
			await createUser(newUser.uid, newUser.displayName || newUser.email);
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

export async function getFirestoreDoc<T>(path: string): Promise<T | null> {
	const db = getFirestore(getFirebaseApp());
	try {
		const docRef = doc(db, path);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data() as T;
		}
	} catch (error) {
		console.error('Error on requesting resource: ', path);
		console.error(error);
	}
	return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function setFirestoreDoc(path: string, data: any) {
	const db = getFirestore(getFirebaseApp());
	const docRef = doc(db, path);
	await setDoc(docRef, data);
	return docRef;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateFirestoreDoc(path: string, data: any) {
	const db = getFirestore(getFirebaseApp());
	const docRef = doc(db, path);
	await updateDoc(docRef, data);
}
