const getProfileAPI = async (userId) => {
  const url = `https://681b262c17018fe5057a4ab8.mockapi.io/accounts?userid=${userId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // MockAPI возвращает массив — берём первый элемент, если есть
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getProfileAPI;
