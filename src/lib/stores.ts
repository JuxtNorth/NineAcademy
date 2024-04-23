import { writable } from "svelte/store";

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