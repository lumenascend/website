/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				gradient: {
				  '0%': { backgroundPosition: '0% 50%' },
				  '50%': { backgroundPosition: '100% 50%' },
				  '100%': { backgroundPosition: '0% 50%' },
				},
			  },
			  animation: {
				gradient: 'gradient 6s ease infinite',
			  },
			colors: {
				royalPlum: "#6C0080", // Royal Plum (Purple)
        		sunsetGold: "#FAB32E", // Sunset Gold (Orange)
			  },
			  fontFamily: {
				sans: ['Nunito Sans', 'sans-serif'], // Default sans-serif font
				quicksand: ['Quicksand', 'sans-serif'], // Add Quicksand font
			  },
			  borderRadius: {
				'lumen': '20px'
			  }
		},
	},
	plugins: [],
}
