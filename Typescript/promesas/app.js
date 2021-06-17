(function () {
    console.log('Inicio');
    var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Se termino el timeout');
        }, 1000);
    });
    promise1.then(function (mensaje) {
        console.log(mensaje);
    });
    console.log('fin');
}());
