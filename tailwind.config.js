/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnPrimary:"#7000ff",
        yellowUzum: "#ffff00",
        categoryBG: "#F6F6F6",
        novinkaBg: "#B5EE6F",
        dicount: "#E44542",
        footerBg:"#F5F5F6",
        brandBg:"#F8F8F8",
        catalog:"#FEEE00",
        modal: 'rgba(0, 0, 0, .5)',
        redBg: 'rgb(218, 0, 43)',
        inputBg:"#F2F4F7",
      },
      container:{
        center:true,
        padding:"20px",
        screens:{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      }
    },
  },
  plugins: [],
}