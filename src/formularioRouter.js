import express from 'express';
import * as productos from './Service.js';

const router = express.Router();
router.get('/Formulario',(req,res) => {

    console.log(req.body);

    res.render('Formulario');
});

 export default router;