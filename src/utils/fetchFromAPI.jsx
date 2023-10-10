import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

console.log(import.meta.env.VITE_REACT_APP_RAPID_API_KEY)

export const fetchFromAPI = async (url) => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        throw error; // You can re-throw the error to handle it at a higher level
    }
};
