async function loadProductosAjax(){

    const response = await fetch('/producto');

    const producto = await response.text();
  
    const content = document.getElementById("producto");

    content.innerHTML = producto;

}

async function loadMoreProductosAjax(){

    const response = await fetch('/moreproductos');

    const producto = await response.text();
  
    const content = document.getElementById("producto");

    content.innerHTML = producto;
}
async function searchProductos(event){

    event.preventDefault();
    
    const terminoBusqueda = document.getElementById("buscador").value;

    const response = await fetch(`/selectproductos?termino=${encodeURIComponent(terminoBusqueda)}`);

    const producto = await response.text();
  
    const content = document.getElementById("producto");

    content.innerHTML = producto;

}

async function filterProductos(){

    const categoria = document.getElementById("categoria").value;

    const estado = document.getElementById("estado").value;

    const preciomin = document.getElementById("PrecioMinimo").value;

    const preciomax = document.getElementById("PrecioMaximo").value;

    const response = await fetch(`/filterProductos?categoria=${encodeURIComponent(categoria)}&estado=${encodeURIComponent(estado)}&preciomin=${encodeURIComponent(preciomin)}&preciomax=${encodeURIComponent(preciomax)}`);

    const producto = await response.text();

    const content = document.getElementById("producto");

    content.innerHTML = producto;

}