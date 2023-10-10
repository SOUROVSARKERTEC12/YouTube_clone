import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions"

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key':'2aa3ce9f57mshbacad974450db4ep17d2c6jsn7cda434f6031',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
