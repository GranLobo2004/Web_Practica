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

router.post('/paginaDetalle/edit/:nombre', (req, res) => {
    let producto = productos.getProducto(req.params.nombre);
    let categoria = producto.categoria;
    producto.categoria={moviles:false, TV:false, Portatiles:false, Ordenadores:false, Consolas:false, Audio:false, Relojes:false, Otros:false};
    switch (categoria){
        case "Móviles y Tablets":{
            producto.categoria.moviles=true;
        };
        case "TV":{
            producto.categoria.TV=true;
        };
        case "Portatiles":{
            producto.categoria.Portatiles=true;
        };
        case "Ordenadores":{
            producto.categoria.Ordenadores=true;
        };
        case "Consolas":{
            producto.categoria.Consolas=true;
        };
        case "Audio":{
            producto.categoria.Audio=true;
        };
        case "Relojes Inteligentes":{
            producto.categoria.Relojes=true;
        };
        case "Otros":{
            producto.categoria.Otros=true;
        };
    };
    console.log(producto.categoria);
    productos.addProducto(producto);
    res.render('Formulario', { producto })
});
    


export default router;