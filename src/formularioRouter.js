import express from 'express';
import * as productos from './Service.js';

const router = express.Router();
router.get('/Formulario',(req,res) => {

    console.log(req.body);

    res.render('Formulario');
});

router.post('/producto/new',(req,res) => {

    let {product_name,price, seller, category, description, services, estado_producto, imagen1, imagen2, imagen3} = req.params.body;
    let imagenes = [imagen1,imagen2,imagen3];
    let producto = {product_name,price,seller,category,description,services,estado_producto,imagenes};
    productos.addProducto(producto);
    res.render('paginaDetalle', productos.getProducto(product_name));

});

 export default router;