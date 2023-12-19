import express from 'express';
import * as productos from './Service.js';
import * as ajax from '../public/Index.js';

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

export default router;

