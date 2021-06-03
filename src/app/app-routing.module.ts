import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ApplicationslistComponent} from './pages/applicationslist/applicationslist.component';
import {ApplyformComponent} from './pages/applyform/applyform.component';
import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
      {path : '', redirectTo : '/home', pathMatch : 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'applications', component: ApplicationslistComponent},
      {path: 'apply', component: ApplyformComponent},
      {path: '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
