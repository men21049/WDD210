const urlCurrentTemp = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51978&lon=-86.9445&appid=263cf71672fff58aea296c19f5ddaf92&units=imperial';
const urlForecastTemp = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5197&lon=-86.9445&units=imperial&appid=263cf71672fff58aea296c19f5ddaf92';

const currentTemp = document.querySelector('.cTemp');
const fWeather1 = document.querySelector('.fTemp1');
const fWeather2 = document.querySelector('.fTemp2');
const fWeather3 = document.querySelector('.fTemp3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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
 
    currentTemp.textContent = "Current Temp is " + data.main.temp + "°F, and a humidity of " + data.main.humidity + "%";
    weatherIcon.setAttribute('src',`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    let descriptions = data.weather[0].description.split(" ");
    descriptions.forEach((element, index) => {
        descriptions[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });

    const description = descriptions.join(" ");

    const capitalized = description.charAt(0).toUpperCase() + description.slice(1)
    weatherIcon.setAttribute('alt',capitalized);
    captionDesc.textContent = capitalized;

}

async function displayForecast(){
    const data = await apiFetch(urlForecastTemp);
    const temp1 = data.list[0].main.temp;
    fWeather1.textContent = `Tomorrow's forecast temp will be ${temp1}°F`;
}

function dateFormat(dt){
    const day = dt.getDate();
    const month = dt.getMonth()+1;
    const year = dt.getFullYear();
    return `${month}/${day}/${year}`;
}

displayWeather();
displayForecast();
