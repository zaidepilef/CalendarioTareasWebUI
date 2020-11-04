import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './pages/home/home.component';
import { CalendarizacionComponent } from './components/calendarizacion/calendarizacion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MantenedorTareasComponent } from './components/mantenedor-tareas/mantenedor-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarizacionComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MantenedorTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
