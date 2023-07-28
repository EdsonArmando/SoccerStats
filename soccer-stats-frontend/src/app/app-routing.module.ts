import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeniedComponent } from './componentes/denied/denied.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SidenavbarComponent } from './pages/sidenavbar/sidenavbar.component';
import { CaruselComponent } from './componentes/carusel/carusel.component';
import { SidenavbarclientComponent } from './pages/Cliente/sidenavbarclient/sidenavbarclient.component';
import { ConfirmemailComponent } from './componentes/confirmemail/confirmemail.component';
import { AdminsidenavbarComponent } from './pages/Administrador/adminsidenavbar/adminsidenavbar.component';
import { ForgotemailComponent } from './componentes/forgotemail/forgotemail.component';
import { MembershipsidenavbarComponent } from './pages/Cliente/membershipsidenavbar/membershipsidenavbar.component';
import { SecurityGuard } from './guard/security.guard';
import { SecurityadminGuard } from './guard/securityadmin.guard';
import { SecurityemployeeGuard } from './guard/securityemployee.guard';

const routes: Routes = [
  {   path: '',
   component: CaruselComponent
  },
  {   path: 'login',
   component: LoginComponent
  },
  {   path: 'register',
  component: RegisterComponent
  },
  {
    path: "pages/empleado",
    component: SidenavbarComponent,
    canActivate:[SecurityemployeeGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/pages.module").then(
            (m) => m.PagesModule,
          ),
      },
    ]
  },
  {   path: 'error',
   component: DeniedComponent
  },
  {
    path: 'usuario/:id',
    component: ConfirmemailComponent
  },
  {
    path: 'usuario/forgotemail/:token',
    component: ForgotemailComponent
  },
  {
    path: "pages/client",
    component: SidenavbarclientComponent,
    canActivate:[SecurityGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/Cliente/principal-routing.module").then(
            (m) => m.PrincipalRoutingModule,
          ),
      },
    ],
  },
  {
    path: "pages/client/membership",
    component: MembershipsidenavbarComponent,
    canActivate:[SecurityGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/Cliente/principal-routing.module").then(
            (m) => m.PrincipalRoutingModule,
          ),
      },
    ]
  },
  {
    path: "pages/admin",
    component: AdminsidenavbarComponent,
    canActivate:[SecurityadminGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/Administrador/adminpages.module").then(
            (m) => m.AdminpagesModule,
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
