const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routen einbinden
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
