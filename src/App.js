import { useState, useEffect } from 'react'

function App() {

  // State
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })
    } else {
      console.log("Navigation Not Supported by This Browser")
    }

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long])

  return (
    <div className="App">
    </div>
  );
}

export default App;
