import { RouterModule, Routes } from "@angular/router";

//components
import { HomeComponent } from "./app/components/home/home.component";
import {AboutComponent} from './app/components/about/about.component';
import {HeroesComponent} from './app/components/heroes/heroes.component';


const APP_ROUTES : Routes = [

    {path : 'home', component: HomeComponent },
    {path : 'about', component: AboutComponent },
    {path : 'heroes', component: HeroesComponent },
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);