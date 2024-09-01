/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        royalblue: "#1877f2",
        gray: "#171515",
        color: "#fff",
      },
      spacing: {},
      fontFamily: {
        lacquer: "Lacquer",
        "lakki-reddy": "'Lakki Reddy'",
        outfit: "Pacifico",
        "playwrite-PE": "'Playwrite PE'",
        "anton-SC": "'Anton SC'",
        lobster: "Lobster",
        "lilita-One": "'Lilita One'",
        cabecera: ["Dosis", "sans-serif"],
        "permanent-marker": ["Permanent Marker", "cursive"],
        "luckiest-guy": ["Luckiest Guy", "cursive"],
        Knewave: ["Knewave"],
        Chewy: ["Chewy"],
        Chango: ["Chango"],
        "Rum-Raisin": ["Rum Raisin"],
        "Montserrat-Alternates": ["Montserrat Alternates", "sans-serif"],
      },
      fontSize: {
        inherit: "inherit",
        "16xl": "1.60rem",
        "2xl": "1.60rem",
        "9xl": "1.60rem",

        "21xl": "2.5rem",
        "13xl": "2rem",
        "5xl": "1.5rem",
        "29xl": "3rem",
        "19xl": "2.375rem",
        "10xl": "1.813rem",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  //el verdadero
  plugins: [],
};

/*

    fontSize: {
      inherit: "inherit",
      "16xl": "1.60rem",
      "2xl": "1.60rem",
      "9xl": "1.60rem",

      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",     

    },


    screens: {
      mq1920: {
        raw: "screen and (max-width: 1920px)",
      },   
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },  
      mq744: {
        raw: "screen and (max-width: 744px)",
      }, 
      mq360: {
        raw: "screen and (max-width: 360px)",
      },     
    },  

*/
