import express from 'express';
import * as productos from './Service.js';
import { body, validationResult } from 'express-validator';
const router = express.Router();
router.get('/Formulario', (req, res) => {
    
    res.render('Formulario');
});

router.post('/producto/update/:id', 
[body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
body('vendedor').notEmpty().withMessage('El nombre del vendedor es obligatorio'),
body('precio').notEmpty().withMessage('El precio es obligatorio'),
body('categoria').notEmpty().withMessage('La categoría es obligatoria'),
body('descripcion').notEmpty().withMessage('La descripcion es obligatoria'),
body('servicios').notEmpty().withMessage('Los servicios son obligatoriaos'),
body('imagen1').notEmpty().withMessage('Es obligatorio al menos una imagen'),
body('estado').notEmpty().withMessage('El estado es obligatorio'),

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
    let comentarios=[];
    let imagenprincipal = imagen1;
    let producto;
    var num = +req.params.id;

    if (!errors.isEmpty()) {
        // Hay errores de validación, adjunta los mensajes de error al objeto res.locals
        res.locals.errors = errors.array();
        producto = { id:num, nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagenprincipal, imagenes, comentarios };
        res.render('Formulario', { producto, errors: res.locals.errors});
      }
      else{
        producto = { id:num, nombre, precio, vendedor, categoria, descripcion, servicios, estado, imagenprincipal, imagenes, comentarios };
        res.locals.errors = [];
        productos.updateProducto(producto);
        res.redirect(`/paginaDetalle/${producto.id}`);
    }
});

router.post('/paginaDetalle/edit/:id', (req, res) => {
    let producto = productos.getProducto(req.params.id); 
    if (producto.categoria = "Móviles y Tablets") {
            producto.categoria={Moviles:true};
        }
    else if (producto.categoria = "TV"){
            producto.categoria={TV:true};
        }
    else if (producto.categoria = "Portatiles"){
            producto.categoria={Portatiles:true};
        }
    else if (producto.categoria = "Ordenadores"){
            producto.categoria={Ordenadores:true};
        }
    else if (producto.categoria = "Consolas"){
            producto.categoria={Consolas:true};
        }
    else if (producto.categoria = "Audio"){
            producto.categoria={Audio:true};
        }
    else if (producto.categoria = "Relojes Inteligentes"){
            producto.categoria={Relojes:true};
        }
    else if (producto.categoria = "Otros"){
            producto.categoria={Otros:true};
        }

    if (producto.estado = 'Nuevo'){
        producto.estado = {Nuevo:true};
    }
    else if (producto.estado = 'Reacondicionado '){
        producto.estado = {Reacondicionado: true}
    }
    else if (producto.estado = 'Segunda mano'){
        producto.estado = {Segunda: true};
    }
    res.render('Formulario', { producto })
    });

router.post('/producto/create', (req, res) => {
    let producto ={id:0};
    res.render('Formulario', { producto });
    });

export default router;