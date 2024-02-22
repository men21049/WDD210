let temperature = document.querySelector('.cTemp').innerHTML;
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

windChill(temperature,windSpeed);