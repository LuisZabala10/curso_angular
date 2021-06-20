import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeoresService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-busqueda',
  templateUrl: './heroe-busqueda.component.html'
})
export class HeroeBusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string = '';

  constructor(private activateRoute: ActivatedRoute, private heroeService: HeoresService,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{

      this.heroes = this.heroeService.buscarHeores(params['termino']);

      this.termino = params['termino'];
    });
  }

  verHeroe(id: number){
    this.router.navigate(['/heroe',id]);
  }

}
