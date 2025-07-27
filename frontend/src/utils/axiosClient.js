import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',

    // iska mtlb brower se login karenge toh cookie bhi send karenge
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosClient;