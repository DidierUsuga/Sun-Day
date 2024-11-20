export interface WeatherApiResponse {
    cod: string;
    weather: { icon: string; description: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
}

export const getWeather = async (city: string): Promise<WeatherApiResponse> => {
    const apiKey = import.meta.env.VITE_APP_API_KEY; // Obtener la API key del .env
    if (!apiKey) {
        throw new Error('Falta la API key en el archivo .env');
    }
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${apiKey}`;

    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};
