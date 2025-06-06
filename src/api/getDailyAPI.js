const apiKey = "16bf680cb30f4031bb864763fd5ad62e";

const getDailyAPI = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=en`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();

  const dayTemps = {};

  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!dayTemps[date]) dayTemps[date] = [];
    dayTemps[date].push(item.main.temp);
  });

  const result = Object.entries(dayTemps).slice(0, 5).map(([date, temps]) => ({
    date,
    avgTemp: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1),
    description: data.list.find(item => item.dt_txt.startsWith(date)).weather[0].description
  }));

  return { daily: result };
};

export default getDailyAPI;
