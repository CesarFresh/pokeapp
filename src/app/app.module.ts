import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { FirstUpperCasePipe } from './pipes/first-upper-case.pipe';
import { Sort } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    FirstUpperCasePipe,
    Sort
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PokemonService,
    Sort
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
