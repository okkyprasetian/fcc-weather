function Weather({ data }) {
    return (
        <div className="card">
            <h2 className="name">City Name: {data.timezone}</h2>
            <p>Temperature: {data.current.temp}</p>
            <p>Sunrise: {data.current.sunrise}</p>
            <p>Sunset: {data.current.sunset}</p>
            <p>Description: {data.current.weather[0].main}</p>
        </div>
    );
}

export default Weather;