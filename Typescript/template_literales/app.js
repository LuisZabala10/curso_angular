(function () {
    var nombre = 'Luis';
    var apellido = 'Zabala';
    var edad = 25;
    function getEdad() {
        return edad;
    }
    var salida = "nombre " + nombre + " apellido " + apellido + " edad " + getEdad();
    console.log(salida);
}());
