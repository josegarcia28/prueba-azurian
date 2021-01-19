import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListarComponent } from './components/listar/listar.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'list', component: ListarComponent},
    {path: 'perfil/:id', component: PerfilComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
  })

export class PAGES_ROUTES {}