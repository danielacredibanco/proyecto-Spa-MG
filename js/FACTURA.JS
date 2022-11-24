//crear una funcion
function calcular(){
    //definir variables para el iva precio y cantidad
const iva =0.19;
let precio = document.simuladorFactura.precio.value;
let cantidad = document.simuladorFactura.cantidad.value;
// capturar el producto
producto = document.getElementById("producto").value;

//* crear una validacion para evitar aperaciones con datos nulos o vacios; que la cantidad o precio no sea 0. se hace con una estructura condicional if-then */
if (precio == 0 || precio == null || cantidad== 0 ||
cantidad == null){
    alert("cantidad o precio son 0 o no son validos, intentar de nuevo");
}
else{
    // declacar las variables para las operaciones 
    // valor total vt
    let vt = precio * cantidad;
     // el valor del porcentaje del producto con iva es vi
    let vi = vt * iva; 
    // total a pagar que es la suma de iva + valor total tp 
    let tp = vt + vi;

    // imprimir o mostrar los resultados en la pagina web, se utiliza un elemento llamado InnerHTML
    document.getElementById("ValorProducto").innerHTML=producto;
    //mostrar el precio 
    document.getElementById("ValorPrecio").innerHTML=precio;
    // mostrar el ValorTotal
    document.getElementById("ValorTotal").innerHTML=vt;
    // mostrar el ValorIva
    document.getElementById("ValorIva").innerHTML=vi;
    // mostrar el TotalPagar 
    document.getElementById("TotalPagar").innerHTML=tp;


}


}



// continuara
