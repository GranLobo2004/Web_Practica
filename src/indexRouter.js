import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {

    productos.loadProductos();
    res.render('index');
});

router.get('/index', (req, res) => {
    res.render('index');
});

router.get('/producto',(req,res) => {
    productos.resetProductos();
    let botonMas;
    let productosInicio = productos.showProductosInicio();
    if( productosInicio!= null){
        botonMas = productos.buttonMasProductos();
    }
    else {
        botonMas=null;
    }
    res.render('producto',{producto:productosInicio, botonMas})
});
router.get('/moreproductos',(req,res) => {
    let listaproductos = productos.showMoreProductos();
    let botonMas;
    botonMas = productos.buttonMasProductos();
    res.render('producto',{producto:listaproductos,botonMas})
});

router.get('/selectproductos',(req,res) => {
    let terminoBusqueda = req.query.termino || '';
    productos.buscarProductos(terminoBusqueda);
    let productosBuscados = productos.showProductosInicio();
    let botonMas = productos.buttonMasProductos();
    res.render('producto',{producto:productosBuscados, botonMas})
});


router.get('/filterProductos',(req,res) => {
    const estado = req.query.estado;
    const categoria = req.query.categoria;
    const preciomin = req.query.preciomin;
    const preciomax = req.query.preciomax;
    let botonMas;
    productos.filtrarProductos(estado,categoria, preciomin, preciomax);
    let productosFiltrados = productos.showProductosInicio();
    if (productosFiltrados!= null){
        botonMas = productos.buttonMasProductos();
    }
    else{
        botonMas=null;
    }
    res.render('producto',{producto:productosFiltrados, botonMas});
});

export default router;

