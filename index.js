import weather from "./getWeather.js";

const d=document, w= window, n=navigator;
const search= d.querySelector('.searchBox__btn');



d.addEventListener('click',(e)=>{

    //const ApiKey= 'f4cda76e3ae3b11827d9d4989bb93279';
    //const city= d.querySelector('.searchBox__input').value;

    if(e.target === search){
       
        weather();

    }

})


d.addEventListener("keydown",(e)=>{

    if(e.key === "Enter"){

        weather();
      

    }


})


