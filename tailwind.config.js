/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      lineHeight: {
        normal: '1.6',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1110px',
      }
    },
    colors: {
      white: '#FFFFFF',
      primary: '#FF3FA2',
      text: '#1A0E14',
      'muted': '#949192',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      h1: '2.986rem',
      h2: '2.488rem',
      h3: '2.074rem',
      h4: '1.728rem',
      h5: '1.44rem',
      h6: '1.2rem',
      body: '1rem',
      small: '0.833rem',
      nano: '0.694rem',
    },
  },
  plugins: [],
}
