import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {ApplicationslistComponent} from './pages/applicationslist/applicationslist.component';
import {ApplyformComponent} from './pages/applyform/applyform.component';



const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent}
    ]
  },
  {
    path: 'application', component: HeaderComponent,
    children: [
      {path: 'applications', component: ApplicationslistComponent},
      {path: 'apply', component: ApplyformComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
