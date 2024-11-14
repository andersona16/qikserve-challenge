// api/[...proxy].js
import axios from 'axios';

const API_BASE_URL = 'https://cdn-dev.preoday.com/challenge';

export default async function handler(req, res) {
    try {
        const apiUrl = `${API_BASE_URL}${req.url.replace('/api', '')}`;

        const response = await axios({
            method: req.method,
            url: apiUrl,
            headers: {
                ...req.headers,
                host: 'cdn-dev.preoday.com',
            },
            data: req.body,
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Erro no proxy:', error);
        res.status(error.response ? error.response.status : 500).json({
            message: error.message,
            error: error.response?.data || null,
        });
    }
}
