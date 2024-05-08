const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;
const session = require('express-session');

app.use(express.json(), cors());
app.use(express.urlencoded({ extended : true }))
const keycloak = require('./config/keycloak.js').initKeycloak();
const memoryStore = require('./config/keycloak.js').getMemoryStore();

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }));
app.use(keycloak.middleware());

// Routen einbinden
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port} 😎😍`);
});
