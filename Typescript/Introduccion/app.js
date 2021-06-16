"use strict";
(function () {
    function saludar(nombre) {
        console.table("Hola " + nombre);
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
}());
