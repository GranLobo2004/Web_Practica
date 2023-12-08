import express from 'express';
import * as productos from './Service.js';

const router = express.Router();
router.get('/Formulario',(req,res) => {

    console.log(req.body);

    res.render('Formulario');
});

router.post('/producto/new',(req,res) => {

    let {nombre,precio, vendedor, categoria, descripcion, servicios, estado, imagen1, imagen2, imagen3} = req.body;
    let imagenes = [{imagen: imagen1},{imagen: imagen2},{imagen: imagen3}]
    let producto = {nombre,precio,vendedor,categoria,descripcion,servicios,estado,imagenes};
    productos.addProducto(producto);
    res.render('paginaDetalle', productos.getProducto(nombre));

});

 export default router;