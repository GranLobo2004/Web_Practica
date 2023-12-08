import express from 'express';
import * as productos from './Service.js';

const router = express.Router();

router.get('/paginaDetalle/:nombre', (req, res) => {

    let producto = productos.getProducto(req.params.nombre);

    res.render('paginaDetalle', { producto });
});

router.post('/producto/neww',(req,res) => {

    let {usuario,texto} = req.params.body;
    let comentario ={usuario,texto};
    let producto = productos.getProducto(req.params.nombre);
    productos.addComentario(comentario,producto);
    res.render('paginaDetalle', producto);

});
export default router;