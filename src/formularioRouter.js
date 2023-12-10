import express from 'express';
import * as productos from './Service.js';

const router = express.Router();
router.get('/Formulario', (req, res) => {

    console.log(req.body);

    res.render('Formulario');
});

router.post('/producto/new', (req, res) => {

    let { nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagen1, imagen2, imagen3 } = req.body;
    let imagenes = [{ imagen: imagen2 }, { imagen: imagen3 }];
    let comentarios = new Array();
    let imagenprincipal = imagen1;
    let producto = { nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagenprincipal, imagenes, comentarios };
    productos.addProducto(producto);
    res.render('paginaDetalle', { producto });
});

router.get('/paginaDetalle/edit/:nombre', (req, res) => {
    let producto = productos.getProducto(req.params.nombre);
    res.render('Formulario', { producto })
});

router.post('/paginaDetalle/edit/:nombre', (req, res) => {
    const ValorNuevoProducto = {
        nombre: req.body.nombre,
        vendedor: req.body.vendedor,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        servicios: req.body.servicios,
        estado: req.body.estado,
        imagen1: req.body.imagen1,
        imagen2: req.body.imagen2,
        imagen3: req.body.imagen3,
    };

    let exitoEdicion = productos.editProducto(req.params.nombre, ValorNuevoProducto);
    let producto = productos.getProducto(exitoEdicion)
    // Si la edición es exitosa, redirige a la página de detalles del producto actualizado
    res.redirect(`/paginaDetalle/${producto}`);

});
    


export default router;