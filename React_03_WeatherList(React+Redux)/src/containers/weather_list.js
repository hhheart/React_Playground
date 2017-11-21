import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'; 
import GoogleMap from '../components/google_map';
class WeatherList extends Component{
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const cityTemps = cityData.list.map(weather => weather.main.temp);
        const cityPressures = cityData.list.map(weather => weather.main.pressure);
        const cityHumidities = cityData.list.map(weather => weather.main.humidity);
        //console.log(cityTemps);
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat; 
        // swap to use es6 syntax instead, below
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={cityTemps} color={"orange"} units={"K"} /></td>
                <td><Chart data={cityPressures} color={"green"} units={"hPa"} /></td>
                <td><Chart data={cityHumidities} color={"black"} units={"%"} /></td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempurature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

/*function mapStateToProps(state){
    return { weather: state.weather};
} */

// es6 syntax

function mapStateToProps({weather}){
    //return { weather: weather };
    return { weather }; // { weather } == { weather: state.weather }
}

export default connect (mapStateToProps)(WeatherList);
