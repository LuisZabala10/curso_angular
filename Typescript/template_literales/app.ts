(function(){

    const nombre = 'Luis';
    const apellido = 'Zabala';
    const edad = 25;

    function getEdad():number{
        return edad
    }

    const salida = `nombre ${nombre} apellido ${apellido} edad ${getEdad()}`;

    console.log(salida);


}())