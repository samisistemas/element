const colors = {
	default: {
		0: '#FFFFFF',
		100: '#F4F4F8',
		200: '#E3E6E9',
		300: '#CBD5E1',
		400: '#94A3B8',
		500: '#64748B',
		600: '#505D6F',
		700: '#3C4653',
		800: '#282E38',
		900: '#14171C',
	},
	primary: {
		50: '#E8ECF4',
		100: '#D1DAE9',
		200: '#A3B5D3',
		300: '#768FBE',
		400: '#486AA8',
		500: '#1A4592',
		600: '#153775',
		700: '#102958',
		800: '#0A1C3A',
		900: '#050E1D',
	},
	positive: {
		50: '#E5F7EA',
		100: '#CCEED6',
		200: '#99DEAC',
		300: '#66CD83',
		400: '#33BD59',
		500: '#00AC30',
		600: '#007822',
		700: '#00671D',
		800: '#004513',
		900: '#00220A',
	},
	negative: {
		50: '#FDEAEA',
		100: '#FAD6D6',
		200: '#F5ADAD',
		300: '#F18383',
		400: '#EC5A5A',
		500: '#E73131',
		600: '#B92727',
		700: '#8B1D1D',
		800: '#5C1414',
		900: '#2E0A0A',
	},
	warning: {
		50: '#FEF5E7',
		100: '#FDECCE',
		200: '#FBD89D',
		300: '#F9C56D',
		400: '#F7B13C',
		500: '#F59E0B',
		600: '#C47E09',
		700: '#935F07',
		800: '#623F04',
		900: '#312002',
	},
	green: {
		100: '#CCEED6',
		500: '#00AC30',
		700: '#00671D',
	},
	orange: {
		150: '#FFE2BA',
		500: '#FF9F1A',
		700: '#995F10',
	},
	yellow: {
		150: '#FEF6C0',
		500: '#FCE12D',
		750: '#7E7116',
	},
	red: {
		50: '#FBEEEC',
		500: '#D3513F',
		700: '#7F3126',
	},
	purple: {
		100: '#EEE2F3',
		500: '#AB6EC2',
		700: '#674274',
	},
	blue: {
		100: '#CFE8F3',
		500: '#0F8CC2',
		750: '#074661',
	},
}

colors.info = colors.primary
colors.secondary = colors.default
colors.teal = colors.default

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./ts/**/*.ts',
		'./js/**/*.js',
		'./resources/views/**/*.blade.php',
		'./src/**/*.php'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
			'serif': ['Inter', 'serif'],
			'mono': ['Inter', 'monospace'],
		},
    colors: colors,
		extend: {
			borderRadius: {
				'none': '0',
				DEFAULT: '0.5rem',
				'full': '624rem',
			},
			keyframes: {
				'linear-progress': {
					'0%': { left: '-30%' },
					'100%': { left: '100%' }
				}
			},
			animation: {
				'linear-progress': 'linear-progress 2s linear infinite'
			},
		}
	},
	plugins: [
		require('@tailwindcss/forms')({ strategy: 'class' }),
		require('./js/tailwindcss/plugins/hideScrollbar'),
		require('./js/tailwindcss/plugins/softScrollbar'),
		require('./js/tailwindcss/plugins/appearance-none')
	]
}
