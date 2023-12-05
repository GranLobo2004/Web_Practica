import express from 'express';
import * as mapaproducto from './Elementos.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('WebPrincipal', { 
        producto: mapaproducto.inicializemapa(),
    });
});

router.get('/enlace/:nenlace', (req, res) => {

    res.render('paginaDetalle', {
        nenlace: req.params.nenlace,
    });
})
export default router;