const pushCityAPI = async (profile, city) => {
  const cities = profile.city || [];
  if (!cities.includes(city)) {
    cities.push(city);
  }
  const response = await fetch(
    `https://681b262c17018fe5057a4ab8.mockapi.io/accounts/${profile.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...profile, city: cities }),
    }
  );
  if (!response.ok) {
    throw new Error("Помилка оновлення профілю");
  }
  return await response.json();
}

export default pushCityAPI;
