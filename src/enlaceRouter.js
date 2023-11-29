import express from 'express';

const router = express.Router();

router.get('/enlace/:nenlace', (req, res) => {

    res.render('paginaDetalle', {
        nenlace: req.params.nenlace,
    });
});

export default router;