const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',   //Enter your API key
        'X-RapidAPI-Host': ''   //Enter your Host address
    }
};

const weatherDetail = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            cityName.innerHTML = city
            // Cloud_pct.innerHTML = response.pct
            Feels_like.innerHTML = response.feels_like
            Humidity.innerHTML = response.humidity;
            Max_temp.innerHTML = response.max_temp
            Min_temp.innerHTML = response.min_temp
            // Sunrise.innerHTML = response.sunrise
            // Sunset.innerHTML = response.sunset
            Temp.innerHTML = response.temp
            Wind_degrees.innerHTML = response.wind_degrees
            Wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()  //to prevent from relauding automatically
    weatherDetail(inputCity.value)
})
weatherDetail('Noida')
