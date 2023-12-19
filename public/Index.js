async function loadProductosAjax(){

    console.log('checkpoint');
    const response = await fetch('/producto');

    const producto = await response.text();
  
    const content = document.getElementById("producto");

    content.innerHTML = producto;

}