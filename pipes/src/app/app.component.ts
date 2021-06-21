import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitán América'
  nombre2: string = 'LuIs ZaBaLA'

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  personaje = ['Spiderman', 'Thor',
    'Loki', 'Wolverrine']

  PI: number = Math.PI;

  porcentaje: number = 0.234

  salario: number = 1234.5;

  fecha : Date =new Date();

  activar : boolean = true;

  idioma: string = 'es';

  videoUrl: string = 'https://www.youtube.com/embed/BCUHCYBwstI';

  valorPromesa = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Llego la  data');
    },4500);
  });

  heroe={
    nombre:'Logan',
    clave: 'Wolverine',
    edad: 'Edad',
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

  cambiarIdioma(idioma :string):void{
    this.idioma = idioma;
  }

}
