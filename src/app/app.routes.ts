import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';

export const routes: Routes = [{path : '', component: LoginComponent},
    {path:'agregar-medico', component: AgregarMedicoComponent}
];
