import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/paginaDetalle/:id', (req, res) => {

    let producto = productos.getProducto(req.params.id);
    if (typeof producto === "undefined"){
        let errormessage = 'El producto que buscas no existe.'
        res.render('error',{errormessage})
    }
    else
        console.log(productos.get)
        res.render('paginaDetalle', {producto} );
});

router.post('/new/comentario/:id',(req,res) => {

    let {usuario,texto}= req.body;
    let producto = productos.getProducto(req.params.id);
    productos.addComentario(usuario,texto, producto);
    res.redirect(`/paginaDetalle/${req.params.id}`);
});

router.post('/:id',(req,res) =>{
    productos.deleteProducto(req.params.id);
    res.redirect('/index')
});



export default router;