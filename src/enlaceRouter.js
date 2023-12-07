import express from 'express';
import * as productos from './datos.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        producto: productos.showProductos(),
    });
});

router.get('/paginaDetalle/:nombre', (req, res) => {

    let producto = productos.getProducto(req.params.nombre);

    res.render('paginaDetalle', { producto });
});
export default router;

