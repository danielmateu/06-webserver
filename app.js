

const express = require('express')
const app = express();
const port = 8080;

// Servir contenido estático
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World en su respectiva ruta')
});

/* This is a catch-all route that will send the 404.html file to any request that doesn't match a
previous route. */
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})