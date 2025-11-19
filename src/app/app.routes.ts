import { Routes } from '@angular/router';
import { HolaMundoComponent } from './pages/hola-mundo/hola-mundo.component';
import { AcercaDeComponent} from './pages/acerca-de/acerca-de.component'
export const routes: Routes = [
    {
        path: 'hola',
        component: HolaMundoComponent
    },
    {
        path: 'acerca',
        component: AcercaDeComponent
    },
    {
        path:'',
        redirectTo: 'hola',
        pathMatch: 'full'
    }
];
