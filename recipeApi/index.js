const express = require('express');
const app = express();
const Port = 8080;
 
app.use(express.json());
 
app.listen(
    Port,
    () => console.log(`It's alive on https://10.115.1.14:${Port}`)
)
 
app.get('/recipe', (req, res) => {
    res.status(200).send({
        dish: 'Pizza Magaritha',
        country: 'Italy'
    })
});
 
app.post('/recipe/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
 
    if (!name) {
        return res.status(418).send({ message: 'We need a logo' });
    }
 
    if (res.headersSent) {
        console.error('Headers already sent');
    } else {
        res.send({
            dish: `with your ${name} and ID of ${id}`,
        });
    }
});