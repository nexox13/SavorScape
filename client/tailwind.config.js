export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3B82F6',   
        red: '#EF4444',  
        green: '#10B981',  
        yellow: '#FBBF24',  
        purple: '#663399',  
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '30px',
      }
    },
  },
  plugins: [],
}
