import React, { useState } from 'react';
import './weather.css';


export default function Weather() {
    const [city, setCity] = useState(null);
    const [deg, setDeg] = useState(null);
    const [wind_speed, setWind_speed] = useState(null);
    const [search, setSearch] = useState("Bulandshahr");

    // useEffect(() => {
    // }, [search])
    const Search=(e)=>{
        e.preventDefault();
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df651183025f1665269865d5e7237c2e`;
            const response = await fetch(url);
    
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
            setWind_speed(resJson.wind.speed);
            setDeg(resJson.wind.deg);
        }
    
        fetchApi();
    }
    return (
        <div className="weather_box">
            <form className="inputData" onSubmit={Search} >
                <input
                    type="search"
                    value={search}
                    className="inputField"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" >Search</button>
            </form>

            {
                !city ? (
                    <p className="errorMsg">
                        No Data Found
                    </p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}&deg;C
                            </h1>
                            <h3 className="tempmin_max"> Min: {city.temp_min}°C || Max: {city.temp_max}°C </h3>
                            <h3 className="tempmin_max">humidity : {city.humidity}%</h3>
                            <h3 className="tempmin_max"> wind speed : {wind_speed} m/sec</h3>
                            <h3 className="tempmin_max"> wind : {deg} &deg;</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
            }
        </div>
    )
}
