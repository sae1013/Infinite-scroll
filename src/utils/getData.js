import axios from 'axios';
export const getData = async() => {
    const res = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50");
    return res.data.data.movies;    
}

