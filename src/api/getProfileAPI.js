function getProfileAPI(userid, password) {
  console.log("Fetching profile for user:", userid, password);
  return fetch(`https://681b262c17018fe5057a4ab8.mockapi.io/accounts?userid=${userid}&password=${password}`, {
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

      return data[0]; // Вернуть первого пользователя
    });
}

export default getProfileAPI;
