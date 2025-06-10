


const getHourlyAPI = async ( city ) => {
    const apiKey = "16bf680cb30f4031bb864763fd5ad62e";
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,
        units: "metric",
    });
    const url = `https://api.openweathermap.org/data/2.5/forecast?${params.toString()}`



    try {
        const response = await fetch(url, params);



        const data = await response.json();
        console.log(data)
        return data;


    } catch (error) {
        console.error("Fetch error:", error.message);
        return null;
    }
}


export default getHourlyAPI