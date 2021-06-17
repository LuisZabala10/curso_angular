(function () {
    console.log('Inicio');
    var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Se termino el timeout');
        }, 1000);
    });
    promise1.then(function (mensaje) {
        console.log(mensaje);
    }).catch(error=>{
        console.warn(error);
    });
    console.log('fin');
}());
