import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//services
import { HeoresService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent{

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService : HeoresService) { 

    this.activatedRoute.params.subscribe(params =>{

      this.heroe = this.heroeService.getHeroe(params['id']);

      console.log(this.heroe);

    });
    
  }
}
