import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions"

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

try {
    export const fetchFromAPI = async (url) => {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);

        return data;
    };
    console.log(data)
} catch (error) {
    console.error(error);
}