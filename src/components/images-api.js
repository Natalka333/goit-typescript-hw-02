import axios from "axios";
const API_KEY = '2uRalbC6V6zEmQlQVJzmTNHi3iZgCca44F07nlHrTI8'
// axios.defaults.baseUrl = "https://api.unsplash.com/";
// axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;



export const fetchImagesGallery = async (query, page) => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`);
    return data;
}


