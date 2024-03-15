const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

app.use(express.json(), cors());
app.use(express.urlencoded({ extended : true }))

// Routen einbinden
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
