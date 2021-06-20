import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//services
import { HeoresService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] =[]

  constructor(private _heroeService : HeoresService, private router: Router) { }

  ngOnInit(): void {

    this.heroes = this._heroeService.getHeroes();
  }

  verHeroe(id: number){
    this.router.navigate(['/heroe',id]);
  }

}
