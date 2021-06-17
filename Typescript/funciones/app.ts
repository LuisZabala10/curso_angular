(function(){

    //argumentos obligatorios, con valores por defectos y opcionales
    function activar(quien : string, momento? : string, objeto: string = 'batiseñal'){

        if(momento){
            console.log(`${quien} activó las ${objeto} en la ${momento}.`);
        }
        else{
            console.log(`${quien} activó las ${objeto}.`);
        }

    }

    activar('Luis','tarde');

}())