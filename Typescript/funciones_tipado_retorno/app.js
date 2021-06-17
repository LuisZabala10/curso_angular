(function () {
    var sumar = function (a, b) {
        return a + b;
    };
    var nombre = function () { return 'Hola Luis'; };
    var obtenerSalario = function () {
        return new Promise(function (resolve, reject) {
            resolve('Luis');
        });
    };
    obtenerSalario().then(function (resultado) { return console.log(resultado.toUpperCase()); });
})();
