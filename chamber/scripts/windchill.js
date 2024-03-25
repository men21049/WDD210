/*let temperature = document.querySelector('.cTemp').innerHTML;
temperature = temperature.replace(/<b>/g, "");
temperature = temperature.replace(/<\/b>/g, "");
temperature = temperature.replace('°🌡️',"")

let windSpeed = document.querySelector('.wSpeed').innerHTML;
windSpeed = windSpeed.replace(/<b>/g, "");
windSpeed = windSpeed.replace(/<\/b>/g, "");
windSpeed = windSpeed.replace('mph🍃', "");

function windChill(temp, wspeed){
    windC = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
    document.querySelector('.wChill').innerHTML = "<b>🌬️ "+windC.toFixed(2)+"</b>";
}

windChill(temperature,windSpeed);*/


const currentTemp = document.querySelector('.cTemp');
const currentWindChill = document.querySelector('.wSpeed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const urlCurrentTemp = 'https://api.openweathermap.org/data/2.5/weather?lat=20.62&lon=-103.35&appid=263cf71672fff58aea296c19f5ddaf92&units=imperial';
const urlForecastTemp = 'api.openweathermap.org/data/2.5/forecast?id=3981461&appid=263cf71672fff58aea296c19f5ddaf92&units=imperial';

async function apiFetch(url){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            return data;
        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeather(){

    const data = await apiFetch(urlCurrentTemp);
    console.log(data);

    /*currentTemp.textContent = data.main.temp + "°F";
    weatherIcon.setAttribute('src',`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    let descriptions = data.weather[0].description.split(" ");

    
    descriptions.forEach((element, index) => {
        descriptions[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });

    const description = descriptions.join(" ");

    const capitalized = description.charAt(0).toUpperCase() + description.slice(1)
    weatherIcon.setAttribute('alt',capitalized);
    captionDesc.textContent = capitalized;
    currentWindChill.textContent = data.wind.speed + " miles/hour";*/

}

displayWeather();