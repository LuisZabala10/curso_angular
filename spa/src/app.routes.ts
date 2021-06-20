import { RouterModule, Routes } from "@angular/router";

//components
import { HomeComponent } from "./app/components/home/home.component";
import {AboutComponent} from './app/components/about/about.component';
import {HeroesComponent} from './app/components/heroes/heroes.component';
import { HeroeComponent } from "./app/components/heroe/heroe.component";
import { HeroeBusquedaComponent } from "./app/components/heroe-busqueda/heroe-busqueda.component";


const APP_ROUTES : Routes = [

    {path : 'home', component: HomeComponent },
    {path : 'about', component: AboutComponent },
    {path : 'heroes', component: HeroesComponent },
    {path : 'heroe/:id', component: HeroeComponent },
    {path : 'heroes-busqueda/:termino', component: HeroeBusquedaComponent },
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);