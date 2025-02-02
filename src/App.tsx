import { useState } from 'react';
import { useWeather } from './hooks';
import SearchForm from './components/Search-Form';
import WeatherInfo from './components/Weather-Info';
import NotFound from './components/Not-Found';

function App() {
  const [city, setCity] = useState("");
  const { weather, notFound, searchWeatherByCity } = useWeather();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    searchWeatherByCity(city);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-white/20 p-4 rounded-xl flex flex-col">
        <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
        {notFound && <NotFound />}
        {!notFound && weather && (
          <WeatherInfo
            icon={weather.icon}
            description={weather.description}
            temperature={weather.temperature}
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
          />
        )}
      </div>
    </div>
  );
}

export default App;
