import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/paginaDetalle/:nombre', (req, res) => {

    let producto = productos.getProducto(req.params.nombre);
    if (typeof producto === "undefined"){
        let errormessage = 'El producto que buscas no existe.'
        res.render('error',{errormessage})
    }
    else
        res.render('paginaDetalle', {producto} );
});

router.post('/paginaDetalle/:nombre',(req,res) => {

    let {usuario,texto}= req.body;
    let producto = productos.getProducto(req.params.nombre);
    productos.addComentario(usuario,texto, producto);
    res.render('paginaDetalle', {producto});
});

router.post('/:nombre',(req,res) =>{
    productos.deleteProducto(req.params.nombre);
    res.render('index',{producto: productos.showProductos()});
});



export default router;