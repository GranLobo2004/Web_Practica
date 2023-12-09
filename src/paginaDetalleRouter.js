import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/paginaDetalle/:nombre', (req, res) => {

    let producto = productos.getProducto(req.params.nombre);

    res.render('paginaDetalle', {producto} );
});

router.post('/paginaDetalle/:nombre/comentario/new',(req,res) => {

    let {usuario,texto}= req.body;
    let comentario = {usuario:usuario,texto:texto};
    let producto = productos.getProducto(req.params.nombre);
    productos.addComentario(comentario,producto);
    res.render('paginaDetalle',{producto});
});

router.post('/deleteProducto',(req,res) =>{
    productos.deleteProducto(req.params.nombre);
    res.redirect('/');
});

export default router;