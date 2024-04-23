import { type User } from 'firebase/auth';
import { writable } from 'svelte/store';

interface AlertStoreProps {
	title: string;
	description: string;
	type: 'info' | 'error';
}

export const alert = writable<AlertStoreProps>({
	title: '',
	description: '',
	type: 'info'
});

export const user = writable<User | null>(null);
