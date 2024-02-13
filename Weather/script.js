const api = "be163700458fdaf429d42055e7feb449";

const apilink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");
const weather = document.querySelector(".weather");
searchBtn.addEventListener("click",() =>checkWeather(searchBox.value))

async function checkWeather(city){
    const response = await fetch(apilink + city + `&appid=${api}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
        document.querySelector("#back").style.backgroundColor = "red";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";

}

