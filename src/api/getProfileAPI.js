function getProfileAPI(email, password) {
  console.log("Fetching profile for user:", email, password);
  return fetch(`https://681b262c17018fe5057a4ab8.mockapi.io/accounts?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Помилка запиту до API");
      return res.json();
    })
    .then((data) => {
      if (data.length === 0) {
        throw new Error("Невірний логін або пароль");
      }
      return data[0];
    });
}

export default getProfileAPI;
