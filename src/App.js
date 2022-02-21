import { useState, useEffect } from 'react'
import Weather from './Weather'

function App() {

  // State
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [api] = useState('50e498c867d3e585514457c5f980432e')
  const [data, setData] = useState([])

  // Use Effect
  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        })
      } else {
        console.log("Navigation Not Supported by This Browser")
      }

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        })
    }
    fetchData()
  }, [lat, long, api])


  return (
    <div className="App">
      {(typeof data == 'und') ? (
        <Weather data={data} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
