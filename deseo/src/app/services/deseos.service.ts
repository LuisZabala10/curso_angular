import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[]= [];


  constructor() {

    const list1 = new Lista('Recolectar piedras del infinito');
    const list2 = new Lista('Recolectar piedras del mas alla');

    this.lista.push(list1,list2);

  }

}
