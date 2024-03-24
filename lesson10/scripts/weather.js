const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
49.75, 6.635
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=263cf71672fff58aea296c19f5ddaf92&units=imperial';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayWeather(data);
        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data){
    currentTemp.textContent = data.main.temp + "°F";
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

apiFetch();