import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.parent!.params.subscribe(params =>{
      console.log("RUTA HIJA DETALLE!!");
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
