const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;
const session = require('express-session');

app.use(express.json(), cors());
app.use(express.urlencoded({ extended : true }))

// Routen einbinden
const apiRoutes = require('./routes/api');
app.use('/', apiRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port} 😎😍`);
});
