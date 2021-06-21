import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  readonly HEADERS = new HttpHeaders({
    'Authorization': 'Bearer BQC8oWN9vB58PZfzTu7afaDPF1bLJL-0hqYqFb5vBKWvuk7vQcuw97nfOhwRYRU4xZOT9CUZ_Aq8HjXEFn0'
  });

  constructor(private httpClient: HttpClient) { }

  private getQuery(query:string):Observable<any>{
    return this.httpClient.get(`https://api.spotify.com/v1/${query}`,{headers: this.HEADERS});
  }

  getNewRelases():Observable<any>{

    const query = 'browse/new-releases';

    return this.getQuery(query).pipe(map((data:any)=>{
        return data.albums.items;
    }));
  
  }

  getArtistas(termino: string):Observable<any>{

    const query = `search?q=${termino}&type=artist`;

    return this.getQuery(query).pipe(map((data:any)=>{
      return data.artists.items;
    }));
  }

  getArtista(id: string):Observable<any>{

    const query = `artists/${id}`;

    return this.getQuery(query);
  }

  getTopTracks(id: string):Observable<any>{

    const query = `artists/${id}/top-tracks?country=us`;

    return this.getQuery(query).pipe(map(data=>{
      return data.tracks;
    }))
  }

}
