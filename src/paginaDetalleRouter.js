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
    res.redirect('/index');
});

router.get('/addtocart/:productId',(req,res) => {
    
    let producto = productos.getProducto(req.params.productId);
    productos.AddCompra(producto);
    let cestacompra = productos.GetCarrito();
    res.render('productoCompra',{producto:cestacompra})
});
router.get('/showcart',(req,res) => {
    let cestacompra = productos.GetCarrito();
    console.log("CARRITO",cestacompra);
    res.render('productoCompra',{producto:cestacompra})
});

export default router;