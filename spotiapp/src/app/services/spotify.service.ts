import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  readonly HEADERS = new HttpHeaders({
    'Authorization': 'Bearer BQDc4XxSVXQmtL-fKgtlaCvK3TyUy8aqm7W207azBkV6jejZk3M7MA8HSu0g9qKznQkRFAXmWUkgctfp81g'
  });

  private getQuery(query:string):Observable<any>{
    return this.httpClient.get(`https://api.spotify.com/v1/${query}`,{headers: this.HEADERS});
  }

  constructor(private httpClient: HttpClient) { }

  getNewRelases():Observable<any>{

    const query = 'browse/new-releases';

    return this.getQuery(query).pipe(map((data:any)=>{
        return data.albums.items;
    }));
  
  }

  getArtista(termino: string):Observable<any>{

    const query = `search?q=${termino}&type=artist`;

    return this.getQuery(query).pipe(map((data:any)=>{
      return data.artists.items;
    }));
  }
}
