import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.params.subscribe(params =>{
      console.log("RUTA PADRE!!");
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
