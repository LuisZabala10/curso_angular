import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};

  tracks: any[] = [];

  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {

      this.getArtista(params['id']);

      this.getToTraks(params['id']);
    });
  }

  getArtista(id: string)
  {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe(
      artista => {

        this.artista = artista;
        this.loading = false;

      }
    );
  }

  getToTraks(id: string){
    this.spotifyService.getTopTracks(id).subscribe(
      tracks=>{
        console.log(tracks);
        this.tracks = tracks;
      }
    )
  }
}
