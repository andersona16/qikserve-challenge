// api/proxy.js
import axios from 'axios';

const API_BASE_URL = process.env.VITE_API_BASE_URL;

export default async function handler(req, res) {
    try {
        const apiUrl = `${API_BASE_URL}${req.url.replace('/api/proxy', '')}`;

        const response = await axios({
            method: req.method,
            url: apiUrl,
            headers: req.headers,
            data: req.body,
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(error.response ? error.response.status : 500).json({ message: error.message });
    }
}
