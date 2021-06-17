(function(){

    console.log('Inicio');


    const promise1 = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve('Se termino el timeout');
        },1000)
    });

    promise1.then(mensaje=>{
        console.log(mensaje);
    })

    console.log('fin');



}())