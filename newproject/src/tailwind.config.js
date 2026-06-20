export default {

    
darkMode: "class",
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
xtend: {},
  },
  plugins: [],

content:[
"./index.html",
"./src/**/*.{js,jsx}"
],



theme:{


extend:{


animation:{


fade:
"fade .8s ease-in-out",

slide:
"slide .5s ease"


},


keyframes:{


fade:{


"0%":{
opacity:0,
transform:"translateY(20px)"
},

"100%":{
opacity:1,
transform:"translateY(0)"
}


},


slide:{


"0%":{
transform:"translateY(-20px)",
opacity:0
},


"100%":{
transform:"translateY(0)",
opacity:1
}


}



}


}


}


}