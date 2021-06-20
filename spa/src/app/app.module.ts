import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//routes
import { APP_ROUTING } from '../app.routes';

//services
import { HeoresService } from './services/heroes.service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBusquedaComponent } from './components/heroe-busqueda/heroe-busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeBusquedaComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
