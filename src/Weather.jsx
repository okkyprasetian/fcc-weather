function Weather({ data, lat, long }) {

    const temp = (data.current.temp - 273.15).toFixed(2)
    const sunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString()
    const sunset = new Date(data.current.sunset).toLocaleTimeString()
    const humidity = data.current.humidity
    const uvi = data.current.uvi
    const windspeed = data.current.wind_speed

    const icon = data.current.weather[0].icon
    const weather = data.current.weather[0].description

    return (
        <div className="card">

            <div className="top">
                <h1>Weather App</h1>
            </div>

            <div className="content">
                <div className="content-top">
                    <h3>Location</h3>
                    <p>Latitude: {lat}</p>
                    <p>Longitude: {long}</p>
                </div>

                <div className="content-mid">
                    <p>Weather: <img id="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" /> {weather}</p>
                </div>

                <div className="content-bot">
                    <div className="left">
                        <p>Temperature: {temp} &deg;C </p>
                        <p>uvi: {uvi}</p>
                        <p>Sunrise: {sunrise}</p>
                    </div>
                    <div className="right">
                        <p>Humidity: {humidity}%</p>
                        <p>wind speed: {windspeed} meter/sec</p>
                        <p>Sunset: {sunset}</p>
                    </div>
                </div>

            </div>
            <div className="timezone">
                Timezone: {data.timezone}
            </div>

        </div>
    );
}

export default Weather;