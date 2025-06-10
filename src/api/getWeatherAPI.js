const getWeatherAPI = async (city) => {
    const apiKey = "16bf680cb30f4031bb864763fd5ad62e";

    // Формируем параметры запроса безопасным способом
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,
        units: "metric",
    });

    const url = `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                console.warn("City not found");
                return null;
            }

            if (response.status === 401) {
                console.warn("Unauthorized: Invalid API key");
                return null;
            }
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data)
        return data;


    } catch (error) {
        console.error("Fetch error:", error.message);
        return null;
    }
};

export default getWeatherAPI;
