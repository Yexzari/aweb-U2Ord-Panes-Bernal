function Guardar(){

    function nota(descripcion){
    this.descripcion=descripcion;
    }
var notaCapturar = document.getElementById("descripcion").value;
descripcionn = new nota(notaCapturar);
console.log(descripcionn);
agregar();

}
var notas = [];
function  agregar () {
notas.push(descripcionn);
console.log(notas);
document.getElementById("table").innerHTML += '</thead><tbody><td>'+descripcionn.descripcion+'</td></tbody>';
}
