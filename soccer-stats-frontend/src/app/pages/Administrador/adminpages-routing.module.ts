import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepotesListComponent } from "./Reportes/repotes-list/repotes-list.component";
import { PartidoListComponent } from "../Empleados/Partidos/partido-list/partido-list.component";
import { PartidoCreateComponent } from "../Empleados/Partidos/partido-create/partido-create.component";
import { SecurityadminGuard } from 'src/app/guard/securityadmin.guard';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {   path: 'reportes',
    component: RepotesListComponent
  },{   path: 'partidos',
    component: PartidoListComponent
  }
  ,{   path: 'createPartido',
    component: PartidoCreateComponent
  },{   path: 'adduser',
  component: AddUsersComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpagesRoutingModule { }
