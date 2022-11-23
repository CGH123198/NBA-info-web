import axios from 'axios';

const CLIENT = axios.create({
    baseURL: 'https://api-nba-v1.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '634f68147emsh8b38c8a74395680p1a5081jsn568440672211',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
})

export default CLIENT;