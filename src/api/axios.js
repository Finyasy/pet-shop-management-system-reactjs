import axios from 'axios';
// import { json } from 'react-router-dom';

// axios.defaults.baseURL = 'https://powerful-dusk-77185.herokuapp.com';
axios.defaults.baseURL = 'https://pet-shop-management-system-rails-production.up.railway.app/';

try {
    axios.defaults.headers.common = {
        Authorization: `bearer ${
        localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || undefined) : null
    }`}
} catch (error) { }

export default axios