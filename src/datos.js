function cargarproductos(){
    let producto1 ={nombre:'Airpods 3ª Generacion',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto2 ={nombre:'Beats Studio 3',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto3 ={nombre:'TV QLED 50" Samsung',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto4 ={nombre:'XBoxSeriesX',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto5 ={nombre:'iphone 13 Pro 256GB',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto6 ={nombre:'Apple iPad mini (2021)',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto7 ={nombre:'PlayStation 5',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto8 ={nombre:'SmartWatch Series x',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto9 ={nombre:'Echo Dot',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto10 ={nombre:'Apple Macbook pro',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto11 ={nombre:'Portátil HP',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto12 ={nombre:'PC Gaming MSI',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto13 ={nombre:'Portátil Gaming Asus',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto14 ={nombre:'Pc Sobremesa',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let producto15 ={nombre:'Surface i7.11370H',imagenes:['https://www.bizneo.com/blog/wp-content/uploads/2019/05/pruebas-psicometricas-810x455.jpg'],precio:160,descripcion:'ramona',servicios:'adios',estado:'hola'} ;
    let mapa = new Map();
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
    let productos=[...mapa.values()];
    return productos;
};

export function getProducto(nombre){
    return mapa.get(nombre);
};

export function deleteProducto(nombre){
    mapa.delete(nombre);
};