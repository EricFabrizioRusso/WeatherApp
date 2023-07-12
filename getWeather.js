const d=document, w= window, n=navigator;


const container= d.querySelector('.weatherApp');
const search= d.querySelector('.searchBox__btn');
const weatherBox= d.querySelector('.weatherBox');
const weatherDetails= d.querySelector('.weatherDetails');
const error404= d.querySelector('.notFound');
const time= d.querySelector('.currentTime');
const body= d.querySelector('body');


export default function weather(){

    const ApiKey= 'f4cda76e3ae3b11827d9d4989bb93279';
    const city= d.querySelector('.searchBox__input').value;


    if(city === "") return;
    
    const getWeather= async()=>{


        try{

            const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
            const json= await res.json()

            if(!res.ok) throw new Error("Error al obtener la ciudad: " + res.status)
            
            //console.log(json);
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weatherBox__img');
            const temperature = document.querySelector('.weatherBox .weatherBox__temperature');
            const description = document.querySelector('.weatherBox .weatherBox__description');
            const humidity = document.querySelector('.weatherDetails .weatherDetails__humidity .humidity__span');
            const wind = document.querySelector('.weatherDetails .weatherDetails__wind .wind__span');

            console.log(json);

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


                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '660px';


            /*const getZoneHour=async(lat,lon)=>{

               
                let apiKey= 'PNC0N15LH3EA'

                try{

                    
                    let res= await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`);
                    let json= await res.json();

                    if(!res.ok) throw new Error("No se a podido acceder a la hora del lugar" + res.status);
                    
                    
                    time.innerHTML= `<span>${json.formatted}<span>`



                }catch(error){


                    console.warn(error)

                }





            }

        
            getZoneHour(json.coord.lat,json.coord.lon)*/



        }catch(error){


            console.log(error)
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;


        }


    }

    getWeather();
                        


}