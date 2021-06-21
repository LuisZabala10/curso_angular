import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  loading: boolean = false;

  error: boolean;

  mensaje: string = '';

  constructor(private spotifyService: SpotifyService) {

    this.loading = true;

    this.error = false;

    this.spotifyService.getNewRelases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensaje = errorServicio.error.error.message;
        
      });
  }

}
