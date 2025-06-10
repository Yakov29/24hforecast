const pushProfileAPI = async (profile) => {
  const url = "http://681b262c17018fe5057a4ab8.mockapi.io/accounts";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in pushProfileAPI:", error);
    throw error;
  }
};

export default pushProfileAPI;
