let mapa = new Map();
export function loadProductos(){
    let dia = new Date();
    let mes = new Date();
    let anyo = new Date();
    let comentario= {usuario:'Leo', fecha: {dia:dia.getDate(), mes:mes.getMonth()+1, anyo:anyo.getFullYear()}, texto:'Es un producto muy fiable, buena calidad-precio, lo único de lo que me puedo quejar son de los materiales de construccion.'};
    let comentarios = [];
    comentarios.unshift(comentario);
    let producto1 ={nombre:'Airpods 3ª Generacion',imagenes:[{imagen:'/images/imagesProductos/airpods.png'}, {imagen:'/images/imagesProductos/beats_studio.png'},{imagen:'/images/imagesProductos/beats_studio.png'}],precio:160, categoria:'Audio' , descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios: comentarios} ;
    let producto2 ={nombre:'Beats Studio 3',imagenes:[{imagen:'/images/imagesProductos/beats_studio.png'}],precio:160, categoria:'Audio',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto3 ={nombre:'TV QLED 50" Samsung',imagenes:[{imagen:'/images/imagesProductos/TV_Samsung.png'}],precio:160, categoria:'TV',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto4 ={nombre:'XBoxSeriesX',imagenes:[{imagen:'/images/imagesProductos/Xbox.png'}],precio:160,categoria:'Consolas',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto5 ={nombre:'iphone 13 Pro 256GB',imagenes:[{imagen:'/images/imagesProductos/iphone.png'}],precio:160,categoria:'Móviles y Tablets', descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto6 ={nombre:'Apple iPad mini (2021)',imagenes:[{imagen:'/images/imagesProductos/ipad_mini.png'}],precio:160,categoria:'Móviles y Tablets',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto7 ={nombre:'PlayStation 5',imagenes:[{imagen:'/images/imagesProductos/PS5.png'}],precio:160,categoria:'Consolas',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto8 ={nombre:'SmartWatch Series x',imagenes:[{imagen:'/images/imagesProductos/SmartWatch.png'}],precio:160,categoria:'Relojes Inteligentes',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto9 ={nombre:'Echo Dot',imagenes:[{imagen:'/images/imagesProductos/alexa.png'}],precio:160,categoria:'Audio',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto10 ={nombre:'Apple Macbook pro',imagenes:[{imagen:'/images/imagesProductos/Mackbook.png'}],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto11 ={nombre:'Portátil HP',imagenes:[{imagen:'/images/imagesProductos/portatil_oficina.png'}],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto12 ={nombre:'PC Gaming MSI',imagenes:[{imagen:'/images/imagesProductos/ordenador_gaming.png'}],precio:160,categoria:'Ordenadores',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto13 ={nombre:'Portátil Gaming Asus',imagenes:[{imagen:'/images/imagesProductos/portatil_gaming.png'}],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    let producto14 ={nombre:'Pc Sobremesa',imagenes:[{imagen:'/images/imagesProductos/ordenador_oficina.png'}],precio:160,categoria:'Ordenadores',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios,} ;
    let producto15 ={nombre:'Surface i7.11370H',imagenes:[{imagen:'/images/imagesProductos/surface.png'}],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:comentarios} ;
    mapa.set(producto1.nombre,producto1);
    mapa.set(producto2.nombre,producto2);
    mapa.set(producto3.nombre,producto3);
    mapa.set(producto4.nombre,producto4);
    mapa.set(producto5.nombre,producto5);
    mapa.set(producto6.nombre,producto6);
    mapa.set(producto7.nombre,producto7);
    mapa.set(producto8.nombre,producto8);
    mapa.set(producto9.nombre,producto9);
    mapa.set(producto10.nombre,producto10);
    mapa.set(producto11.nombre,producto11);
    mapa.set(producto12.nombre,producto12);
    mapa.set(producto13.nombre,producto13);
    mapa.set(producto14.nombre,producto14);
    mapa.set(producto15.nombre,producto15);
};

export function showProductos(){
    let productos= Array.from (mapa.values());//convertirmos el mapa en un array para iterarlo en mustache
    return productos;
};

export function getProducto(nombre){
    return mapa.get(nombre);
};

export function deleteProducto(nombre){
    mapa.delete(nombre);
};

export function addProducto(producto){
    mapa.set(producto.nombre,producto);
};

export function addComentario(usuario, texto, producto){
    let dia = new Date();
    let mes = new Date();
    let anyo = new Date();
    let comentario= {usuario:usuario, fecha: {dia:dia.getDate(), mes:mes.getMonth()+1, anyo:anyo.getFullYear()}, texto:texto};
    producto.comentarios.unshift(comentario);
    mapa.set(producto.nombre,producto);
};