function Weather({ data }) {

    const temp = (data.current.temp - 273.15).toFixed(2)
    const sunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString()
    const sunset = new Date(data.current.sunset).toLocaleTimeString()
    const icon = data.current.weather[0].icon
    const weather = data.current.weather[0].description

    return (
        <div className="card">
            <h2 className="name">Timezone: {data.timezone}</h2>
            <p>Temperature: {temp} &deg;C </p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
            <p>Weather: {weather}</p>
        </div>
    );
}

export default Weather;