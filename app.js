

const http = require('http');

http.createServer(( req, res ) => {


    // res.writeHead(200, {'Content-Type' : 'application/json'});
    res.setHeader('Content-Disposition', 'attachement; filename="lista.csv"')
    res.writeHead(200, {'Content-Type' : 'application/csv'});

    const persona = {
        id: 1,
        nombre: 'Dani'
    }

    // res.write(JSON.stringify(persona));
    res.write('id, nombre\n');
    res.write('1, Dani\n');
    res.write('2, Silvia\n');
    res.write('3, Nuk\n');
    res.write('4, Fernando\n');
    res.end();

}).listen( 8080 );

console.log('Escuchando el puerto', 8080);