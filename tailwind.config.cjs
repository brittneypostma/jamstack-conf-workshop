const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				fit: `repeat(auto-fit, minmax(0, 32rem))`
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
