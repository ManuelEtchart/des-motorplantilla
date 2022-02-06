const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const hds = require('express-handlebars');

app.engine('hds', hds.engine({
    extname: '.hds',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}))

app.set('view engine', 'hds');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

let productos = [];
let contador = 1;

app.get('/', (req,res) => {
    
})

app.post('/productos', (req,res) => {
    productos.push(
        {
            id: contador,
            nombre: req.body.nombre,
            precio: req.body.precio
        }
    )
    res.redirect('/')
    contador = productos[productos.length - 1].id + 1;
})

app.get('/productos', (req,res) => {

})

const PORT = 8080;

const server = app.listen(PORT, () => {
   console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));
