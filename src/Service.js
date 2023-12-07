let mapa;
function cargarproductos(){
    let producto1 ={nombre:'Airpods 3ª Generacion',imagenes:['/images/imagesProductos/airpods.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto2 ={nombre:'Beats Studio 3',imagenes:['/images/imagesProductos/beats_studio.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto3 ={nombre:'TV QLED 50" Samsung',imagenes:['/images/imagesProductos/TV_Samsung.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto4 ={nombre:'XBoxSeriesX',imagenes:['/images/imagesProductos/Xbox.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto5 ={nombre:'iphone 13 Pro 256GB',imagenes:['/images/imagesProductos/iphone.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto6 ={nombre:'Apple iPad mini (2021)',imagenes:['/images/imagesProductos/ipad_mini.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto7 ={nombre:'PlayStation 5',imagenes:['/images/imagesProductos/PS5.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto8 ={nombre:'SmartWatch Series x',imagenes:['/images/imagesProductos/SmartWatch.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto9 ={nombre:'Echo Dot',imagenes:['/images/imagesProductos/alexa.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto10 ={nombre:'Apple Macbook pro',imagenes:['/images/imagesProductos/Mackbook.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto11 ={nombre:'Portátil HP',imagenes:['/images/imagesProductos/portatil_oficina.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto12 ={nombre:'PC Gaming MSI',imagenes:['/images/imagesProductos/ordenador_gaming.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto13 ={nombre:'Portátil Gaming Asus',imagenes:['/images/imagesProductos/portatil_gaming.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto14 ={nombre:'Pc Sobremesa',imagenes:['/images/imagesProductos/ordenador_oficina.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto15 ={nombre:'Surface i7.11370H',imagenes:['/images/imagesProductos/surface.png'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    mapa = new Map();
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
    return mapa;
};

export function showProductos(){
    let mapa=cargarproductos();
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