import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddrestrComponent } from './addrestr/addrestr.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListrestroComponent } from './listrestro/listrestro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrestrComponent,
    UpdateRestroComponent,
    LoginComponent,
    RegisterComponent,
    ListrestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
