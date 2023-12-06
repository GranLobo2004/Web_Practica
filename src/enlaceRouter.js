import express from 'express';
import * as productos from './datos.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        producto: productos.showProductos(),
    });
});

router.get('/post/:id', (req, res) => {

    let producto = produtos.getProducto(req.params.id);

    res.render('paginaDetalle', { producto });
});
export default router;