(()=>{

    // class Avenger{
    //     nombre : string;
    //     equipo : string;
    //     nombreReal : string;

    //     puedePelear : boolean;
    //     peleasGanadas : number;

    //     constructor(nombre: string,equipo :string,
    //         nombreReal : string, puedePeler : boolean,
    //         peleasGnadas : number){
            
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePeler;
    //         this.peleasGanadas = peleasGnadas;
    //     }
    // }

    class Avenger{
        // nombre : string;
        // equipo : string;
        // nombreReal : string;

        // puedePelear : boolean;
        // peleasGanadas : number;

        constructor(public nombre: string,public equipo: string,
            public nombreReal: string, public puedePelear: boolean,
            public peleasGanadas: number){}
    }

    const antman: Avenger = new Avenger(
        'Antman','Cap','Luis',true,10
    );

    console.log(antman);


})()