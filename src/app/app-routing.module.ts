import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarizacionComponent } from './components/calendarizacion/calendarizacion.component';
import { MantenedorTareasComponent } from './components/mantenedor-tareas/mantenedor-tareas.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'calendarizacion',
    pathMatch: 'full',
    component: CalendarizacionComponent
  },
  {
    path: 'tareas',
    pathMatch: 'full',
    component: MantenedorTareasComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
