import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        producto: productos.showProductos(),
    });
});


