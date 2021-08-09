import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  getPaises() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(map((resp: any) => {
        return resp.map((pais: any) => {
          return {
            nombre: pais.name,
            codigo: pais.alpha3Code
          }
        })
      }));
  }

}
