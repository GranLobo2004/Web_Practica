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
    res.render('producto',{producto:productos.showProductos()})
});
router.get('/moreproductos',(req,res) => {
    res.render('producto',{producto:productos.showMoreProductos()})
});

router.get('/selectproductos',(req,res) => {
    let terminoBusqueda = req.query.termino || '';

    res.render('producto',{producto:productos.buscarProductos(terminoBusqueda)})
});

export default router;

