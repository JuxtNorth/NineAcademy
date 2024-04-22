/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				surface: 'rgb(var(--surface))',
				'surface-foreground': 'rgb(var(--surface-foreground))',
				primary: 'rgb(var(--primary))',
				muted: 'rgb(var(--muted))'
			},
			fontFamily: {
				display: '"Lato", sans-serif;',
				body: '"Nunito Sans", sans-serif'
			}
		}
	},
	plugins: []
};
