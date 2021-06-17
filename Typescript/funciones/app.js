(function () {
    //argumentos obligatorios, con valores por defectos y opcionales
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activ\u00F3 las " + objeto + " en la " + momento + ".");
        }
        else {
            console.log(quien + " activ\u00F3 las " + objeto + ".");
        }
    }
    activar('Luis', 'tarde');
}());
