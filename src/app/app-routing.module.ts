import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CasoDeExitoComponent } from './pages/caso-de-exito/caso-de-exito.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'caso-de-exito', component: CasoDeExitoComponent},
  {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
