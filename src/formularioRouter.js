import express from 'express';
import * as productos from './Service.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.get('/Formulario', (req, res) => {
    
    res.render('Formulario');
});

router.post('/producto/new', 
[body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
body('vendedor').notEmpty().withMessage('El nombre del vendedor es obligatorio'),
body('precio').notEmpty().withMessage('El precio es obligatorio'),
body('categoria').notEmpty().withMessage('La categoría es obligatoria'),
// Agrega más reglas de validación según tus necesidades
], (req,res) =>{
const errors = validationResult(req);
    let { nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagen1, imagen2, imagen3 } = req.body;
    let imagenes;
    if (imagen2 === '')
        imagenes = [{imagen:imagen3}];
    if (imagen3 === '')
        imagenes = [{imagen:imagen2}];
    if ((imagen2 === '') && (imagen3 === ''))
        imagenes = [];
    if ((imagen2 != '') && (imagen3 !=''))
        imagenes = [{imagen:imagen2},{imagen:imagen3}];
    let comentarios = new Array();
    let imagenprincipal = imagen1;
    let producto = { id:0, nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagenprincipal, imagenes, comentarios };

    if (!errors.isEmpty()) {
        // Hay errores de validación, adjunta los mensajes de error al objeto res.locals
        res.locals.errors = errors.array();
        res.render('Formulario', { producto: req.body, errors: res.locals.errors });
      }
      else{
        res.locals.errors = [];
        productos.addProducto(producto);
        console.log(productos.getProducto(producto.id));
        res.redirect(`/paginaDetalle/${producto.id}`);
    }
});


router.post('/paginaDetalle/edit/:id', (req, res) => {
    let producto = productos.getProducto(req.params.id);
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
    res.render('Formulario', { producto })
});



router.post('/producto/edited/:id',[
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('vendedor').notEmpty().withMessage('El nombre del vendedor es obligatorio'),
    body('precio').notEmpty().withMessage('El precio es obligatorio'),
    body('categoria').notEmpty().withMessage('La categoría es obligatoria'),
    // Agrega más reglas de validación según tus necesidades
  ], (req,res) =>{
    const errors = validationResult(req);
   

    let { nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagen1, imagen2, imagen3 } = req.body;
    let id = req.params.id;
    let imagenes;
    if (imagen2 === '')
        imagenes = [{imagen:imagen3}];
    if (imagen3 === '')
        imagenes = [{imagen:imagen2}];
    if ((imagen2 === '') && (imagen3 === ''))
        imagenes = [];
    if ((imagen2 != '') && (imagen3 !=''))
        imagenes = [{imagen:imagen2},{imagen:imagen3}];
    var num = +id;
    let producto = {id:num, nombre:nombre, precio:precio, vendedor:vendedor, categoria:categoria, descripcion:descripcion, servicios:servicios, estado:estado, imagenprincipal:imagen1, imagenes:imagenes};
    productos.editProducto(producto);
    if (!errors.isEmpty()) {
        // Hay errores de validación, adjunta los mensajes de error al objeto res.locals
        res.locals.errors = errors.array();
        res.render('Formulario', { producto: req.body, errors: res.locals.errors });
      }
      else{
        res.locals.errors = [];
        res.redirect(`/paginaDetalle/${producto.id}`);
    }
    
})



export default router;