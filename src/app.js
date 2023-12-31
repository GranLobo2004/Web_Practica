import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import indexRouter from './indexRouter.js';
import paginaDetalleRouter from './paginaDetalleRouter.js';
import formularioRouter from './formularioRouter.js';

const app = express();

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), ".html");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.use('/', indexRouter);
app.use('/', paginaDetalleRouter);
app.use('/', formularioRouter);

app.listen(3000, () => console.log('Listening on port 3000!'));