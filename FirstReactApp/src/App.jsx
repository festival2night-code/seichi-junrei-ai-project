import { useState, useEffect } from 'react'

function WeatherApp() {
    const [city, setCity] = useState('Taipei')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // call API to fetch weather data
    const fetchWeather = async () => {
        if (city.trim() === '') return

        setLoading(true)
        setError(null)

        try {
            // use wttr.in API to get weather information
            const response = await fetch(
                `https://wttr.in/${city}?format=%C+%t`
            )
            if (!response.ok) throw new Error('City not found')
            
            const data = await response.text()
            setWeather(data)
        } catch (err) {
            setError(err.message)
            setWeather(null)
        } finally {
            setLoading(false)
        }
    }

    // fetch Taipei weather on initial render
    useEffect(() => {
        fetchWeather()
    }, [])  

    return (
        <div style={{ textAlign: 'center', padding: '30px' }}>
            <h1>🌤️ Weather App</h1>

            {/* input area */}
            <div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
                    placeholder="Enter city name (in English)"
                    style={{ padding: '8px', width: '250px' }}
                />
                <button 
                    onClick={fetchWeather}
                    style={{ padding: '8px 16px', marginLeft: '8px' }}
                >
                    Search
                </button>
            </div>

            {/* loading */}
            {loading && <p>⏳ Loading...</p>}

            {/* error message */}
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}

            {/* weather result */}
            {weather && !loading && !error && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '20px', 
                    backgroundColor: '#f0f8ff',
                    borderRadius: '8px'
                }}>
                    <h3>{city}</h3>
                    <p style={{ fontSize: '24px' }}>{weather}</p>
                </div>
            )}
        </div>
    )
}

export default WeatherApp