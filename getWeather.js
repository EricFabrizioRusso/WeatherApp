const d=document;


const container= d.querySelector('.weatherApp');
const search= d.querySelector('.searchBox__btn');
const weatherBox= d.querySelector('.weatherBox');
const weatherDetails= d.querySelector('.weatherDetails');
const error404= d.querySelector('.notFound');
const time= d.querySelector('.currentTime');
const body= d.querySelector('body');
const weatherMM= document.querySelector('.weatherMM');


export default function weather(){

    const ApiKey= 'f4cda76e3ae3b11827d9d4989bb93279';
    const city= d.querySelector('.searchBox__input').value;


    if(city === "") return;
    
    const getWeather= async()=>{


        try{

            const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
            const json= await res.json()

            if(!res.ok) throw new Error("Error al obtener la ciudad: " + res.status)
            

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weatherBox__img');
            const temperature = document.querySelector('.weatherBox .weatherBox__temperature');
            const description = document.querySelector('.weatherBox .weatherBox__description');
            const humidity = document.querySelector('.weatherDetails .weatherDetails__humidity .humidity__span');
            const wind = document.querySelector('.weatherDetails .weatherDetails__wind .wind__span');
            const temp_min= document.querySelector('.wheatherMM__min');
            const temp_max= document.querySelector('.wheatherMM__max');
   



            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'imgs/clear.png';
                    body.style.backgroundImage = 'url(/imgs/sunnyDay.jpg)';
                    break;

                case 'Rain':
                    image.src = 'imgs/rain.png';
                    body.style.backgroundImage = 'url(/imgs/rainyDay.jpg)';
                    break;

                case 'Snow':
                    image.src = 'imgs/snow.png';
                    body.style.backgroundImage = 'url(/imgs/snowDay.jpg)';
                    break;

                case 'Clouds':
                    image.src = 'imgs/cloud.png';
                    body.style.backgroundImage = 'url(/imgs/cloudyDay.jpg)';
                    break;

                case 'Mist':
                    image.src = 'imgs/mist.png';
                    body.style.backgroundImage = 'url(/imgs/mistDay.jpg)';
                    break;

                case 'Thunderstorm':
                    image.src = 'imgs/rain.png';
                    body.style.backgroundImage = 'url(/imgs/rainyDay.jpg)';
                    break;

                case 'Drizzle':
                    image.src = 'imgs/rain.png';
                    body.style.backgroundImage = 'url(/imgs/rainyDay.jpg)';
                    break;


                default:
                    image.src = '';
                    body.style.backgroundImage = 'url(/imgs/backgroundMap.jpg)';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            temp_max.innerHTML=`<span>Max °C ${parseInt(json.main.temp_max)}</span>`
            temp_min.innerHTML=`<span>Min °C ${parseInt(json.main.temp_min)}</span>`

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '660px';
            weatherMM.style.display='';
    



        }catch(error){


            console.log(error)
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            weatherMM.style.display='none';
            return;


        }


    }

    getWeather();
                        


}