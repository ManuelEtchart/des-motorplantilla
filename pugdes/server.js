const express = require('express');
const path = require('path');
const pug = require('pug')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

let productos = [];
let contador = 1;

app.post('/productos', (req,res) => {
    productos.push(
        {
            id: contador,
            nombre: req.body.nombre,
            precio: req.body.precio,
            foto: req.body.urlFoto
        }
    )
    res.redirect('/')
    contador = productos[productos.length - 1].id + 1;
})

app.get('/productos', (req,res) => {
    res.render('productos.pug', {productos: productos})
})

const PORT = 8080;

const server = app.listen(PORT, () => {
   console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));
