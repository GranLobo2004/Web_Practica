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