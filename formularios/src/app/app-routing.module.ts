import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { ReactiveComponent } from "./pages/reactive/reactive.component";
import { TemplateComponent } from "./pages/template/template.component";


const rouets : Routes = [
    {
        path: 'template', component: TemplateComponent
    },
    {
        path: 'reactivo', component: ReactiveComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'reactivo'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rouets)],
    exports: [RouterModule]
})

export class AppRoutingModule{}