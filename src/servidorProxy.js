const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/pexels', async (req, res) => {
  const pexelsApiKey = "563492ad6f917000010000012c9b635b7a1d4cff8fa2a7b8a4204d0d";
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${pexelsApiKey}`,
      },
      params: {
        query: req.query.query,
        per_page: req.query.per_page,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos de Pexels' });
  }
});

app.listen(3001, () => {
  console.log('Servidor proxy corriendo en el puerto 3001');
});
