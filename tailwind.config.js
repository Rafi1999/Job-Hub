/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ccdd0f",
        
"secondary": "#9970d3",
        
"accent": "#f2874d",
        
"neutral": "#312735",
        
"base-100": "#F7F6F9",
        
"info": "#48BCD5",
        
"success": "#1A6B3A",
        
"warning": "#F7B359",
        
"error": "#F73640",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

