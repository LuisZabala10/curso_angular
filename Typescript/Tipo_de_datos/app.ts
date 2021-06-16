(function(){


    //variables con sus tiposd e datos definidos
    let mensaje:string = 'Hola';
    let numero:number = 123;
    let booleano : boolean = true;
    //objeto tipo de date
    let hoy: Date = new Date();

    //esta variable es de tipo any porque no 
    //asignamos ni un valor ni su tipo al declararla
    //el tipo de dato any aguanta cualquier tipo de dato
    let cualquierCosa;
    cualquierCosa = mensaje;
    cualquierCosa = numero;
    cualquierCosa = booleano;
    cualquierCosa = hoy;

    //objeto
    let spiderman : {
        nombre:string,
        edad : number
    };

    spiderman = {
        nombre : 'Luis',
        edad : 25
    };


})();