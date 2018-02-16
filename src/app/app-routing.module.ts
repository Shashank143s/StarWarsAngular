import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './authguard.service';


const routes = [
  { path:'character',component: TabsComponent, children:[
    { path:'',redirectTo:'all', pathMatch:'full'},
    {path:':side', component:ListComponent}
  ], canActivate: [AuthGuard]},
  { path:'newCharacter', loadChildren:'./create-character/create-character.module#CreateCharacterModule', canActivate: [AuthGuard] },
  { path:'datatable/:section' , component: CharTableComponent, canActivate: [AuthGuard] },
  { path:'login' , component: LoginComponent },
  { path:'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path:'planets', component: PlanetsComponent, canActivate: [AuthGuard] },
  { path:'species', component: SpeciesComponent, canActivate: [AuthGuard] },
  { path:'starships', component: StarshipsComponent, canActivate: [AuthGuard] },
  { path:'vehicles', component: VehiclesComponent, canActivate: [AuthGuard] },
  { path: 'Chartable', component: CharTableComponent, canActivate: [AuthGuard] },
  { path: 'interact', component: InteractComponent, children:[
    { path:'',redirectTo:'male', pathMatch:'full'},
    {path:':gender', component:CharListComponent}
  ], canActivate: [AuthGuard]},
  { path:'**' , redirectTo:'/character/all'}//Keep this route always as last as if placed above will tend to override all the routes
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes, { useHash: true })
    ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule{

}
