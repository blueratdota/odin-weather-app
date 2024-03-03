console.log('this is index.js');
import './style.css'   

//free api key = 993d487070b6452391d124114240303

async function getWeatherDataLondon(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=993d487070b6452391d124114240303&q=${'london'}`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData);
}

// getWeatherDataLondon()

async function getWeatherData(city){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=993d487070b6452391d124114240303&q=${city}`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData);
    return weatherData
}

//sarch stuff
const searchForm = document.querySelector('#search-form')
const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('#search-button')
//city weather details
const cityName = document.querySelector('#city-name')
const cityTemp = document.querySelector('#city-temperature')
const cityFeelTemp = document.querySelector('#city-feel-temperature')
const cityHumidity = document.querySelector('#city-humidity')
const cityWind = document.querySelector('#city-wind-speed')

function viewWeather(){
    const city = searchBar.value
    if (city == ''){
        console.log('empty search bar');
    }
    else{
        (async ()=>{
            const promiseData = await getWeatherData(city)
            // console.log(promiseData.location);
            // console.log(promiseData.current.feelslike_c);
            // console.log(promiseData.current.feelslike_f);

            cityName.textContent = `${promiseData.location.country}, ${promiseData.location.name}`
            cityTemp.textContent = `${promiseData.current.temp_c}C / ${promiseData.current.temp_f}F`
            cityFeelTemp.textContent = `${promiseData.current.feelslike_c}C / ${promiseData.current.feelslike_f}F`
            cityHumidity.textContent = `${promiseData.current.humidity}%`
            cityWind.textContent = `${promiseData.current.wind_kph}kph / ${promiseData.current.wind_mph}mph`


        })()
    }
}


searchBtn.addEventListener('click',function(){
    viewWeather()
})

searchForm.addEventListener('submit',function(e){
    e.preventDefault()
})
// searchBtn.addEventListener('keypress',function(e){
//     console.log(e.key);
// })
