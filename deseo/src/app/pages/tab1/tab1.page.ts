import { Component } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: Lista[] = [];

  constructor(private deseosServices: DeseosService ) {
    this.lista = this.deseosServices.lista;
  }

}
