const getPetsAPI = async (query) => {
    const apiKey = "44245145-3992e974edb390e4edf38875e"; 
     const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;
     try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.hits; 
     } catch (error) {
        console.error('Error fetching images from Pixabay:', error);
        return [];
     }
}

export default getPetsAPI;