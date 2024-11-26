import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { AgregarMedicoComponent } from "./agregar-medico/agregar-medico.component";
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [{path : 'login', component: LoginComponent},
    {path:'main-menu', component: MainMenuComponent},
    {path:'agregar-medico', component: AgregarMedicoComponent},
    {path:'perfil', component: PerfilComponent}
];
