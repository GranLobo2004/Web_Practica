let mapa = new Map();
let nid = 0;
let ini = 0;
let fin;
export function loadProductos(){
    let producto1 ={id:1,nombre:'Airpods 3ª Generacion',imagenprincipal:'/images/imagesProductos/airpods.png', imagenes:[],precio:160, categoria:'Audio' , descripcion:' Los AirPods Pro 3 ofrecen cancelación activa de ruido para inmersión sonora, modo de transparencia para mayor conciencia ambiental, ajuste personalizado con puntas de silicona, resistencia al agua y sudor (IPX4), sonido envolvente adaptativo con audio espacial, hasta 6 horas de reproducción y estuche de carga inalámbrica para más de 24 horas adicionales.',servicios:'2 años de garantía',estado:'Nuevo', vendedor:'Alexander Pearson', comentarios:new Array()} ;
    let producto2 ={id:2,nombre:'Beats Studio 3', imagenprincipal:'/images/imagesProductos/beats_studio.png', imagenes:[],precio:160, categoria:'Audio',descripcion:' Los Beats Studio 3 ofrecen cancelación adaptativa de ruido para aislamiento total, conectividad inalámbrica Bluetooth clase 1, hasta 22 horas de batería con cancelación de ruido activada, sonido preciso y equilibrado, almohadillas suaves para mayor comodidad, controles multifunción en el auricular, tecnología Fast Fuel para una carga rápida y compatibilidad con Siri para control por voz.',servicios:'3 años de garantía',estado:'Segunda mano ', vendedor:'Alexander Pearson', comentarios:new Array()} ;
    let producto3 ={id:3,nombre:'TV QLED 50" Samsung',imagenprincipal:'/images/imagesProductos/TV_Samsung.png',imagenes:[],precio:160, categoria:'TV',descripcion:' El televisor LED Samsung de 50 pulgadas ofrece una pantalla nítida con resolución Full HD, tecnología de mejora de color para imágenes vibrantes, amplio ángulo de visión, conectividad HDMI y USB para múltiples dispositivos, sonido envolvente, diseño delgado y elegante, además de funciones inteligentes para acceder a aplicaciones y contenido en línea.',servicios:'Netflix y Amazon Prime incluidos',estado:'Segunda mano ', vendedor:'Fernando Alonso', comentarios:new Array()} ;
    let producto4 ={id:4,nombre:'XBoxSeriesX', imagenprincipal:'/images/imagesProductos/Xbox.png',imagenes:[],precio:160,categoria:'Consolas',descripcion:' La consola Xbox Series X proporciona potencia de última generación con procesador AMD Zen 2 y gráficos Radeon RDNA 2, hasta 4K y 120 fps, almacenamiento SSD ultrarrápido de 1 TB, retrocompatibilidad con juegos anteriores, tecnología Ray Tracing para gráficos realistas, Quick Resume para cambiar rápidamente entre juegos, y acceso a Xbox Game Pass con una amplia biblioteca de títulos.',servicios:'Xbox Game Pass de 3 meses incluido',estado:'Reacondicionado', vendedor:'Alejandro Valor', comentarios:new Array()} ;
    let producto5 ={id:5,nombre:'iphone 13 Pro 256GB',imagenprincipal:'/images/imagesProductos/iphone.png',imagenes:[],precio:160,categoria:'Móviles y Tablets', descripcion:' El iPhone 13 Pro presenta una pantalla Super Retina XDR ProMotion de 120 Hz, chip A15 Bionic para rendimiento y eficiencia energética mejorados, triple cámara con modo nocturno y grabación Dolby Vision HDR, resistencia al agua IP68, almacenamiento hasta 1 TB, conectividad 5G, y batería optimizada para mayor duración.',servicios:'3 meses de Apple Music incluidos',estado:'Segunda mano ', vendedor:'Gabriel Miró', comentarios:new Array()} ;
    let producto6 ={id:6,nombre:'Apple iPad mini (2021)',imagenprincipal:'/images/imagesProductos/ipad_mini.png',imagenes:[],precio:160,categoria:'Móviles y Tablets',descripcion:' El iPad Mini (2021) cuenta con una pantalla Liquid Retina de 8.3 pulgadas con True Tone y gama de colores amplia, chip A15 Bionic para rendimiento rápido, Touch ID integrado en el botón superior, soporte para Apple Pencil de segunda generación, compatibilidad con 5G, cámara trasera de 12 MP, cámara frontal Ultra Wide, y hasta 256 GB de almacenamiento.',servicios:'2 años de garantía',estado:'Nuevo', vendedor:'Elinee Freites', comentarios: new Array()} ;
    let producto7 ={id:7,nombre:'PlayStation 5',imagenprincipal:'/images/imagesProductos/PS5.png',imagenes:[],precio:160,categoria:'Consolas',descripcion:' La consola PlayStation 5 (PS5) ofrece gráficos de alta fidelidad con resolución 4K y hasta 120 fps, unidad de almacenamiento SSD ultrarrápida para tiempos de carga reducidos, control DualSense con retroalimentación háptica, audio 3D inmersivo, retrocompatibilidad con juegos de PS4, y una amplia gama de títulos exclusivos y de terceros.',servicios:'Recambio de mando en caso de ruptura',estado:'Segunda Mano', vendedor:'Juan García', comentarios:new Array()} ;
    let producto8 ={id:8,nombre:'SmartWatch Series x',imagenprincipal:'/images/imagesProductos/SmartWatch.png',imagenes:[],precio:160,categoria:'Relojes Inteligentes',descripcion:' El Xiaomi X ofrece una pantalla AMOLED nítida, seguimiento de actividad física y sueño, monitorización de frecuencia cardíaca, GPS incorporado, resistencia al agua, varias opciones de deportes, notificaciones inteligentes, control de música, asistente de voz, duración de la batería de varios días y una amplia compatibilidad con dispositivos Android e iOS.',servicios:'Servicio SOS conectado vía satélite',estado:'Nuevo', vendedor:'Miguel de Cervantes', comentarios:new Array()} ;
    let producto9 ={id:9,nombre:'Echo Dot',imagenprincipal:'/images/imagesProductos/alexa.png',imagenes:[],precio:160,categoria:'Audio',descripcion:' El Amazon Echo Dot es un altavoz inteligente con Alexa integrada. Ofrece control por voz, reproducción de música en varios servicios, noticias, alarmas, y respuestas a preguntas. Posee conectividad Bluetooth y una salida de audio de 3.5 mm. Además, puede controlar dispositivos del hogar inteligente y realizar llamadas con manos ',servicios:'1 mes de Amazon Music incluido',estado:'hola', vendedor:'Rosa Melano', comentarios:new Array()} ;
    let producto10 ={id:10,nombre:'Apple Macbook Pro',imagenprincipal:'/images/imagesProductos/Mackbook.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:'El MacBook Pro de Apple ofrece modelos con pantalla Retina brillante de hasta 16 pulgadas, procesadores potentes Intel o M1, almacenamiento SSD ultrarrápido de hasta 8 TB, hasta 64 GB de memoria, gráficos de alto rendimiento, Touch Bar para funcionalidades contextuales, Touch ID para seguridad, altavoces con sonido envolvente y una duración de batería de larga duración.',servicios:'1 año de garantía',estado:'Segunda mano ', vendedor:'Takefusa Kubo', comentarios:new Array()} ;
    let producto11 ={id:11,nombre:'Portátil HP',imagenprincipal:'/images/imagesProductos/portatil_oficina.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:' El HP 15s-fq2037ns presenta un procesador Intel Core i3-1115G4, pantalla HD de 15.6 pulgadas, almacenamiento SSD de 256 GB para mayor velocidad, memoria RAM de 8 GB DDR4, gráficos integrados Intel UHD Graphics, conectividad Bluetooth y Wi-Fi, múltiples puertos USB y HDMI para una conectividad versátil en un diseño portátil y práctico.',servicios:'Limpieza de ventiladores GRATIS una vez al año',estado:'Reacondicionado', vendedor:'Alexander Pearson', comentarios:new Array()} ;
    let producto12 ={id:12,nombre:'PC Gaming MSI',imagenprincipal:'/images/imagesProductos/ordenador_gaming.png',imagenes:[],precio:160,categoria:'Ordenadores',descripcion:' El PcCom Ready con procesador Intel Core i5-12400F ofrece un rendimiento sólido. Con 16 GB de RAM y un SSD de 1 TB, ofrece almacenamiento y velocidad. Equipado con una tarjeta gráfica NVIDIA GeForce RTX 3060, garantiza gráficos potentes para juegos. Conectividad versátil y un diseño bien equilibrado para tareas exigentes y juegos intensivos.',servicios:'Limpieza de ventiladores GRATIS una vez al año',estado:'Reacondicionado', vendedor:'Benito Pérez', comentarios:new Array()} ;
    let producto13 ={id:13,nombre:'Portátil Gaming Asus',imagenprincipal:'/images/imagesProductos/portatil_gaming.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:' El Asus TUF Gaming F15 TUF507ZV4-LP092 integra un procesador Intel Core i7-11800H, combinado con una tarjeta gráfica NVIDIA GeForce RTX 3050 Ti para un rendimiento gaming sólido. Ofrece 16 GB de RAM, un SSD de 512 GB, pantalla FHD de 15.6", teclado retroiluminado, conectividad completa y un diseño robusto para jugadores exigentes.',servicios:'Limpieza de ventiladores GRATIS una vez al año',estado:'Segunda mano ', vendedor:'Alberto Mayoral', comentarios:new Array()} ;
    let producto14 ={id:14,nombre:'Pc Sobremesa',imagenprincipal:'/images/imagesProductos/ordenador_oficina.png',imagenes:[],precio:160,categoria:'Ordenadores',descripcion:' Procesador Intel Core i3, 8 GB RAM, 1 TB HDD, gráficos integrados, Wi-Fi, Bluetooth, USB 3.0, HDMI, Windows 10 preinstalado, diseño compacto para tareas diarias y navegación en línea.',servicios:'Limpieza de ventiladores GRATIS una vez al año',estado:'Nuevo', vendedor:'Jaime Altozano', comentarios:new Array()} ;
    let producto15 ={id:15,nombre:'Surface i7.11370H',imagenprincipal:'/images/imagesProductos/surface.png',imagenes:[],precio:160,categoria:'Portátiles',descripcion:' El Surface con procesador Intel Core i7-11370H ofrece rendimiento de alta gama para productividad. Equipado con una memoria RAM considerable, almacenamiento SSD rápido y una tarjeta gráfica integrada para tareas intensivas. Presenta una pantalla táctil de alta resolución, diseño elegante, y conectividad versátil para usuarios exigentes en movilidad y productividad.',servicios:'Limpieza de ventiladores GRATIS una vez al año',estado:'Segunda mano ', vendedor:'Elinee Freites', comentarios:new Array()} ;
    mapa.set(producto1.id,producto1);
    mapa.set(producto2.id,producto2);
    mapa.set(producto3.id,producto3);
    mapa.set(producto4.id,producto4);
    mapa.set(producto5.id,producto5);
    mapa.set(producto6.id,producto6);
    mapa.set(producto7.id,producto7);
    mapa.set(producto8.id,producto8);
    mapa.set(producto9.id,producto9);
    mapa.set(producto10.id,producto10);
    mapa.set(producto11.id,producto11);
    mapa.set(producto12.id,producto12);
    mapa.set(producto13.id,producto13);
    mapa.set(producto14.id,producto14);
    mapa.set(producto15.id,producto15);
    nid=15;
    fin=6;
};

export function showProductos(){
    let productos = Array.from (mapa.values());
    let newProductos = productos.slice(ini,6);
    for (let contador= 6-1; contador>ini; contador--){
        if (newProductos[contador === null]){
            newProductos.pop();
        }
    };
    fin=6;
    return newProductos;
}
export function showMoreProductos(){
    fin +=3;
    let productos = Array.from (mapa.values());
    let moreProductos = productos.slice(ini,fin);
    for (let contador= fin-1; contador>ini; contador--){
        if (moreProductos[contador === null]){
            moreProductos.pop();
        }
    };
    return moreProductos;
}

export function getProducto(id){
    var num = +id;
    return mapa.get(num);
};

export function deleteProducto(id){
    var num = +id;
    mapa.delete(num);
};

export function updateProducto(producto){
    if (producto.id === 0){
    nid+=1;
    producto.id=nid;
    mapa.set(producto.id,producto);
    }
    else{
    let productoantiguo = mapa.get(producto.id);
    producto.comentarios = productoantiguo.comentarios;
    mapa.set(producto.id, producto);
    }
};

export function addComentario(usuario, texto, productomod){
    let dia = new Date();
    let mes = new Date();
    let anyo = new Date();
    let newcomentario= {usuario:usuario, fecha: {dia:dia.getDate(), mes:mes.getMonth()+1, anyo:anyo.getFullYear()}, texto:texto};
    productomod.comentarios.unshift(newcomentario);
    mapa.set(productomod.id,productomod);
};