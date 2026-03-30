// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos React/TS en src/
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': 'var(--color-primary-yellow)',
        'darker-yellow': 'var(--color-darker-yellow)',
        'accent': 'var(--color-accent)',
        'primary-blue': 'var(--color-primary-blue)',
        'primary-blue-hover': 'var(--color-primary-blue-hover)',
        'primary-blue-pressed': 'var(--color-primary-blue-pressed)',
        'auth-background-dark': '#3C3A4D', 
        'auth-text-dark': '#333140'    
      },
    },
  },
  plugins: [],
}