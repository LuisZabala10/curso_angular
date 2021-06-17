(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    //desestructuracion de objeto
    //aqui es onbligatorio poner el mismo nombre que tengan las propiedades del objeto
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre + " " + clave + " " + poder);
    var avengers = ['Thor', 'Iroman', 'Spiderman'];
    //desestructuracion de arreglo
    //aqui no es obligatorio poner el mismo que tenga el arreglo en la posicion
    var thor = avengers[0], iroman = avengers[1], spiderman = avengers[2];
    console.log(thor + " " + iroman + " " + spiderman);
}());
