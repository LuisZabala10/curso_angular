(function(){
    function saludar(nombre:string){
        console.table(`Hola ${nombre}`);
    }
    
    const wolverine = {
        nombre: 'Logan'
    }
    
    saludar(wolverine.nombre);
    
}())