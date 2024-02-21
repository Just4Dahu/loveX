const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the HTML file to the client
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the search request
app.get('/search-amazon', async (req, res) => {
  const keyword = req.query.keyword || 'defaultKeyword'; // Use the keyword from the query parameters or a default

  const options = {
    method: 'GET',
    url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword-asin',
    params: {
      domainCode: 'fr',
      keyword: keyword, // Use the dynamic keyword
      page: '1',
      excludeSponsored: 'false',
      sortBy: 'relevanceblender',
      withCache: 'true'
    },
    headers: {
      'X-RapidAPI-Key': 'f713c23809msh8d3d6790f3712c8p163acfjsnff359b47bebc', // Replace with your actual RapidAPI Key
      'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from Amazon');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
