import axios from "axios";
const API_KEY = '2uRalbC6V6zEmQlQVJzmTNHi3iZgCca44F07nlHrTI8'
// axios.defaults.baseUrl = "https://api.unsplash.com/";
// axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
import { Image } from "../App/App.types";

export interface FetchImagesResponse {
    results: Image[];
    total: number;
    total_pages: number;
}

export const fetchImagesGallery = async (query: string, page: number): Promise<FetchImagesResponse> => {
    const { data } = await axios.get<FetchImagesResponse>(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`);
    return data;
}


