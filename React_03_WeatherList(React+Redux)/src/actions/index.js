
import axios from 'axios';

const API_KEY = 'd7c6a54cac8387af75de70aa3bd1863b';

//const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY; old 

// use es6 syntax for clean code 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}