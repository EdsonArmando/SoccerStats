import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavbarComponent } from './pages/sidenavbar/sidenavbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import {MatGridListModule} from '@angular/material/grid-list';  
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DeniedComponent } from './componentes/denied/denied.component';
import { CaruselComponent } from './componentes/carusel/carusel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavbarclientComponent } from './pages/Cliente/sidenavbarclient/sidenavbarclient.component';
import { ConfirmemailComponent } from './componentes/confirmemail/confirmemail.component';
import { PrincipalModule } from './pages/Cliente/principal.module';
import { AdminpagesModule } from './pages/Administrador/adminpages.module';
import { AdminsidenavbarComponent } from './pages/Administrador/adminsidenavbar/adminsidenavbar.component';
import { ForgotemailComponent } from './componentes/forgotemail/forgotemail.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MembershipsidenavbarComponent } from './pages/Cliente/membershipsidenavbar/membershipsidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavbarComponent,
    RegisterComponent,
    DeniedComponent,
    CaruselComponent,
    SidenavbarclientComponent,
    ConfirmemailComponent,
    AdminsidenavbarComponent,
    ForgotemailComponent,
    MembershipsidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    PrincipalModule,
    AdminpagesModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
