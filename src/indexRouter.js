import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {

    productos.loadProductos();
    res.render('index', { producto: productos.showProductos()});
});




export default router;

