
const hbs = require('hbs');
const express = require('express');
require('dotenv').config()


const app = express();
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel Mateu',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Daniel Mateu',
        titulo: 'Curso de Node'
    })
    // res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Daniel Mateu',
        titulo: 'Curso de Node'
    })
    // res.sendFile(__dirname + '/public/elements.html')
});


/* This is a catch-all route that will send the 404.html file to any request that doesn't match a
previous route. */
app.get('*', (req, res) => {
    res.render('404', {
        nombre: 'Daniel Mateu',
        titulo: 'Curso de Node'
    });
    // res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})