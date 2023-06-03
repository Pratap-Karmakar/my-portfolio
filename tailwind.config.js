/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container:"1440px",
      contentContainer:"1140px",
      containerSmall:"1024px",
      containerxx:"768px"
    },
    extend: {
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      fontFamily:{
        bodyFont:["Montserrat","sans-serif"],
        titleFont:["Inter","sans-serif"]
      },
      boxShadow:{
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors:{
        bodyColor:"rgb(36,36,36)",
        textOrange:"#F7AB0A",
        textDark:"#8891b0",
        textLight:"#ccd6f6",
        hoverColor:"#F7AB0A",
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}