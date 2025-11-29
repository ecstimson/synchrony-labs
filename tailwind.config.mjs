/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
			},
			colors: {
				navy: '#05101a',
				'navy-dark': '#000000',
				'navy-light': '#162432',
				'navy-card': '#0f1c29',
				red: '#b91c1c',
				teal: '#4682B4',
				'teal-bright': '#B0C4DE',
				steel: '#4682b4',
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
			},
			animation: {
				'ecg-draw': 'draw 12s linear infinite',
				'grid-move': 'gridMove 30s linear infinite',
				'float-up': 'floatUp 20s linear infinite',
				'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'ray-drift-1': 'rayDrift1 20s ease-in-out infinite alternate',
				'ray-drift-2': 'rayDrift2 25s ease-in-out infinite alternate-reverse',
				'ray-drift-3': 'rayDrift3 22s ease-in-out infinite alternate',
				'ray-flash': 'rayFlash 15s ease-in-out infinite',
			},
			keyframes: {
				draw: {
					'0%': { strokeDashoffset: '1200' },
					'100%': { strokeDashoffset: '0' },
				},
				gridMove: {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '0 80px' },
				},
				floatUp: {
					'0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' },
					'20%': { opacity: '0.5' },
					'80%': { opacity: '0.5' },
					'100%': { transform: 'translateY(-20vh) scale(1)', opacity: '0' },
				},
				rayDrift1: {
					'0%': { transform: 'rotate(-8deg) translateX(-5%) scale(1.1)', opacity: '0.5' },
					'100%': { transform: 'rotate(8deg) translateX(5%) scale(1)', opacity: '0.8' },
				},
				rayDrift2: {
					'0%': { transform: 'rotate(5deg) translateX(5%) scale(1.2)', opacity: '0.4' },
					'100%': { transform: 'rotate(-5deg) translateX(-5%) scale(1)', opacity: '0.7' },
				},
				rayDrift3: {
					'0%': { transform: 'rotate(0deg) scale(1)', opacity: '0.6' },
					'50%': { transform: 'rotate(3deg) scale(1.1)', opacity: '0.4' },
					'100%': { transform: 'rotate(-3deg) scale(1)', opacity: '0.6' },
				},
				rayFlash: {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '0.5' },
				},
			},
		},
	},
	plugins: [],
}
