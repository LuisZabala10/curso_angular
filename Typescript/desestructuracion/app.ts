(function(){


    const avenger = {
        nombre: 'Steve',
        clave : 'Capitan America',
        poder : 'Droga'
    }

    //desestructuracion de objeto
    //aqui es onbligatorio poner el mismo nombre que tengan las propiedades del objeto
    const {nombre,clave, poder} = avenger;

    console.log(`${nombre} ${clave} ${poder}`);


    const avengers : string[] = ['Thor','Iroman','Spiderman'];

    //desestructuracion de arreglo
    //aqui no es obligatorio poner el mismo que tenga el arreglo en la posicion
    const [thor, iroman, spiderman] = avengers;

    console.log(`${thor} ${iroman} ${spiderman}`);




}())