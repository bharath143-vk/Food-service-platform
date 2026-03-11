// Server.mjs
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  try {
    const swiggyUrl =
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

    const response = await fetch(swiggyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Swiggy:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
