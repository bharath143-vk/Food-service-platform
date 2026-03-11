// Server.mjs
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Make sure you're using v2 of node-fetch with ES modules

const app = express();
app.use(cors());

app.get('/api/menu/:resId', async (req, res) => {
  const resId = req.params.resId;

  const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`;

  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text(); // helpful if HTML is returned
      console.error(`Swiggy returned status ${response.status}: ${text.slice(0, 100)}...`);
      return res.status(500).json({ error: 'Failed to fetch from Swiggy' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Swiggy:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
