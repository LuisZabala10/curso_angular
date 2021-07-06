import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.parent!.params.subscribe(params =>{
      console.log("RUTA HIJA NUEVO!!");
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
