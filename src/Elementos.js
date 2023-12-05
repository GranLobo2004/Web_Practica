class Producto {
    constructor(nombre, imagenes, precio,descripcion,servicios,estado) {
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.precio = precio;
        this.descripcion=descripcion;
        this.servicios=servicios;
        this.estado=estado;
    };
};

class MapaProductos {
    constructor(){
        this.Mapa = new Map();
        this.tope = 0;
    };
    addproducto(producto){
        this.tope +=1;
        this.Mapa.set(producto.nombre, producto);

    };
    getproducto(n){
        if (this.tope>0){
            this.tope-=1;
            return this.Mapa.get(n);
        };
    };
};

mp = new MapaProductos();

function loadproductos(mp){
    producto1 = new Producto('Airpods 3ª Generacion',[],160,'','','');
    producto2 = new Producto('Beats Studio 3',[],430,'','','');
    producto3 = new Producto('TV QLED 50" Samsung',[],500,'','','');
    producto4 = new Producto('XBoxSeriesX',[],468,'','','');
    producto5 = new Producto('iphone 13 Pro 256GB',[],632.30,'','','');
    producto6 = new Producto('Apple iPad mini (2021)',[],650,'','','');
    producto7 = new Producto('PlayStation 5',[],529,'','','');
    producto8 = new Producto('SmartWatch Series x',[],79.90,'','','');
    producto9 = new Producto('Echo Dot',[],64.99,'','','');
    producto10 = new Producto('Apple Macbook pro',[],1409.90,'','','');
    producto11 = new Producto('Portátil HP',[],419.99,'','','');
    producto12 = new Producto('PC Gaming MSI',[],799.99,'','','');
    producto13 = new Producto('Portátil Gaming Asus',[],619,'','','');
    producto14 = new Producto('Pc Sobremesa',[],307,'','','');
    producto15 = new Producto('Surface i7.11370H',[],1500,'','','');
    mp.addproducto(producto1);
    mp.addproducto(producto2);
    mp.addproducto(producto3);
    mp.addproducto(producto4);
    mp.addproducto(producto5);
    mp.addproducto(producto6);
    mp.addproducto(producto7);
    mp.addproducto(producto8);
    mp.addproducto(producto9);
    mp.addproducto(producto10);
    mp.addproducto(producto11);
    mp.addproducto(producto12);
    mp.addproducto(producto13);
    mp.addproducto(producto14);
    mp.addproducto(producto15);
};

function mostrarproductos(mp){
    for (let c=0; c>mp.tope; c++){
        return mp.getproducto(n);
    }
    loadproductos(mp);
};

export function inicializemapa(mp){
    loadproductos(mp);
    mostrarproductos(mp);
};

export function cargardetalleproducto(n,mp){
    return mp.getproducto(n);
}

export function nuevoproducto(producto,mp){
    mp.addproducto(producto);
}