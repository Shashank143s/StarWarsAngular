import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

//Importing Components
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharTableComponent } from './char-table/char-table.component';
import { InteractComponent } from './interact/interact.component';
import { CharListComponent } from './interact/char-list.component';
import { CharItemComponent } from './interact/char-item.component';
import {  ModalComponent } from './modal/modal.component';
import { LoginComponent } from './auth/login.component';
import { AuthHttp,AuthConfig } from 'angular2-jwt';
import { environment } from '../environments/environment.prod';

//Importing Services
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { AuthGuard } from './authguard.service';

//Import Service Workers
import { ServiceWorkerModule } from '@angular/service-worker';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [ BrowserModule, HttpModule, DataTableModule, AppRoutingModule, FormsModule,  ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) ],
  declarations: [ AppComponent, ItemComponent, TabsComponent, ListComponent, HeaderComponent, MoviesComponent, PlanetsComponent, SpeciesComponent, StarshipsComponent, VehiclesComponent, CharTableComponent, InteractComponent, CharListComponent, CharItemComponent, ModalComponent, LoginComponent ],
  providers: [StarWarsService, LogService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, AuthGuard],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
