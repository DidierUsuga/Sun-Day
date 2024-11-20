import { useState } from "react";
import { getWeather } from "../weather-api";

interface WeatherData {
    icon: string;
    description: string;
    temperature: number;
    humidity: string;
    windSpeed: string;
}

interface WeatherApiResponse {
    cod: string;
    weather: { icon: string; description: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
}

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);

    const searchWeatherByCity = async (city: string): Promise<void> => {
        const data: WeatherApiResponse = await getWeather(city);

        if (data.cod === "404") {
            setNotFound(true);
            setWeather(null);
            return;
        }

        setNotFound(false);
        setWeather({
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            temperature: Math.round(data.main.temp),
            humidity: `${data.main.humidity}%`,
            windSpeed: `${Math.round(data.wind.speed)}m/s`,
        });
    };

    return {
        weather,
        notFound,
        searchWeatherByCity,
    };
};