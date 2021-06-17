(()=>{

    const sumar = (a:number,b:number):number=>{
        return a+b;
    }

    const nombre =():string=> 'Hola Luis';

    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve,reject)=>{
            resolve('Luis');

        });
    }

    obtenerSalario().then(resultado => console.log(resultado.toUpperCase()))




})()