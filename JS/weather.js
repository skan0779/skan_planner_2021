const API_KEY="095733a864d762ab2792bce26fa8e435"



function weatherOn(location){
    const lat = location.coords.latitude; 
    const lon = location.coords.longitude; 
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response=>response.json())
    .then(data=>
        {
            const placeSpan = document.querySelector("#place");
            const weatherSpan = document.querySelector("#weather");
            const tempSpan = document.querySelector("#temp");
            const iconImg = document.querySelector("#weather__icon");
            placeSpan.innerText = `Location : ${data.name}`;
            tempSpan.innerText = `${data.main.temp}°`;
            weatherSpan.innerText = data.weather[0].description;
            iconImg.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
        );
}
function weatherOff(){}

navigator.geolocation.getCurrentPosition(weatherOn,weatherOff);



