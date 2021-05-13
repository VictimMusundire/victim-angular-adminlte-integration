import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationslistComponent } from './pages/applicationslist/applicationslist.component';
import { ApplyformComponent } from './pages/applyform/applyform.component';
import { ExtractfilesComponent } from './pages/extractfiles/extractfiles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ApplicationslistComponent,
    ApplyformComponent,
    ExtractfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
