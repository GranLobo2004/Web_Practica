let mapa = new Map();
export function loadProductos(){
    let producto1 ={nombre:'Airpods 3ª Generacion',imagenprincipal:'/images/imagesProductos/airpods.png', imagenes:[{imagen:'/images/imagesProductos/beats_studio.png'},{imagen:'/images/imagesProductos/beats_studio.png'}],precio:160, categoria:'Audio' , descripcion:'ramona',servicios:'adios',estado:'Nuevo', vendedor:'Alexander Pearson', comentarios:[]} ;
    let producto2 ={nombre:'Beats Studio 3', imagenprincipal:'/images/imagesProductos/beats_studio.png', imagenes:[],precio:160, categoria:'Audio',descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Alexander Pearson', comentarios:[]} ;
    let producto3 ={nombre:'TV QLED 50" Samsung',imagenprincipal:'/images/imagesProductos/TV_Samsung.png',imagenes:[],precio:160, categoria:'TV',descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Fernando Alonso', comentarios:[]} ;
    let producto4 ={nombre:'XBoxSeriesX', imagenprincipal:'/images/imagesProductos/Xbox.png',imagenes:[],precio:160,categoria:'Consolas',descripcion:'ramona',servicios:'adios',estado:'Reacondicionado', vendedor:'Alejandro Valor', comentarios:[]} ;
    let producto5 ={nombre:'iphone 13 Pro 256GB',imagenprincipal:'/images/imagesProductos/iphone.png',imagenes:[],precio:160,categoria:'Móviles y Tablets', descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Gabriel Miró', comentarios:[]} ;
    let producto6 ={nombre:'Apple iPad mini (2021)',imagenprincipal:'/images/imagesProductos/ipad_mini.png',imagenes:[],precio:160,categoria:'Móviles y Tablets',descripcion:'ramona',servicios:'adios',estado:'Nuevo', vendedor:'Elinee Freites', comentarios:[]} ;
    let producto7 ={nombre:'PlayStation 5',imagenprincipal:'/images/imagesProductos/PS5.png',imagenes:[],precio:160,categoria:'Consolas',descripcion:'ramona',servicios:'adios',estado:'Segunda Mano', vendedor:'Juan García', comentarios:[]} ;
    let producto8 ={nombre:'SmartWatch Series x',imagenprincipal:'/images/imagesProductos/SmartWatch.png',imagenes:[],precio:160,categoria:'Relojes Inteligentes',descripcion:'ramona',servicios:'adios',estado:'Nuevo', vendedor:'Miguel de Cervantes', comentarios:[]} ;
    let producto9 ={nombre:'Echo Dot',imagenprincipal:'/images/imagesProductos/alexa.png',imagenes:[],precio:160,categoria:'Audio',descripcion:'ramona',servicios:'adios',estado:'hola', vendedor:'Rosa Melano', comentarios:[]} ;
    let producto10 ={nombre:'Apple Macbook pro',imagenprincipal:'/images/imagesProductos/Mackbook.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Takefusa Kubo', comentarios:[]} ;
    let producto11 ={nombre:'Portátil HP',imagenprincipal:'/images/imagesProductos/portatil_oficina.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'Reacondicionado', vendedor:'Alexander Pearson', comentarios:[]} ;
    let producto12 ={nombre:'PC Gaming MSI',imagenprincipal:'/images/imagesProductos/ordenador_gaming.png',imagenes:[],precio:160,categoria:'Ordenadores',descripcion:'ramona',servicios:'adios',estado:'Reacondicionado', vendedor:'Benito Pérez', comentarios:[]} ;
    let producto13 ={nombre:'Portátil Gaming Asus',imagenprincipal:'/images/imagesProductos/portatil_gaming.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Alberto Mayoral', comentarios:[]} ;
    let producto14 ={nombre:'Pc Sobremesa',imagenprincipal:'/images/imagesProductos/ordenador_oficina.png',imagenes:[],precio:160,categoria:'Ordenadores',descripcion:'ramona',servicios:'adios',estado:'Nuevo', vendedor:'Jaime Altozano', comentarios:[]} ;
    let producto15 ={nombre:'Surface i7.11370H',imagenprincipal:'/images/imagesProductos/surface.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:'ramona',servicios:'adios',estado:'Segunda mano ', vendedor:'Elinee Freites', comentarios:[]} ;
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
    if (mapa.get(producto.nombre)!=null){
        mapa.delete(producto.nombre);
    };
    mapa.set(producto.nombre,producto);
};

export function addComentario(usuario, texto, productomod){
    let dia = new Date();
    let mes = new Date();
    let anyo = new Date();
    let newcomentario= {usuario:usuario, fecha: {dia:dia.getDate(), mes:mes.getMonth()+1, anyo:anyo.getFullYear()}, texto:texto};
    productomod.comentarios.unshift(newcomentario);
    mapa.set(productomod.nombre,productomod);
};