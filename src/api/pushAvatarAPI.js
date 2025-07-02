const pushAvatarAPI = async (avatarURL, userid) => {
    const url = `https://681b262c17018fe5057a4ab8.mockapi.io/accounts?userid=${userid}`;
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: avatarURL }),
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
        console.error("Error in pushAvatarAPI:", error);
        throw error;
    }
};
