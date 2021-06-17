(function () {
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
    var Avenger = /** @class */ (function () {
        // nombre : string;
        // equipo : string;
        // nombreReal : string;
        // puedePelear : boolean;
        // peleasGanadas : number;
        function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'Cap', 'Luis', true, 10);
    console.log(antman);
})();
