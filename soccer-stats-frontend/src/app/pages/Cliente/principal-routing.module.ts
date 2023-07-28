import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from 'src/app/guard/security.guard';
import { NewsComponent } from '../Empleados/news/news.component';
import { MembernewsComponent } from './client/membernews/membernews.component';
import { NonmembernewsComponent } from './client/nonmembernews/nonmembernews.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ReportListComponent } from "./Reportes/report-list/report-list.component";
import { ReportsComponent } from './reports/reports.component';
import { PrediccionComponent } from './prediccion/prediccion.component';

const routes: Routes = [
  {   path: '',
   component: ProfileComponent,
  },
  {   path: 'profile',
   component: ProfileComponent,
  },
  {   path: 'reporte',
    component: ReportsComponent
  },
  {   path: 'newsmember',
   component: MembernewsComponent
  },
  {   path: 'newsgeneral',
   component: NonmembernewsComponent
  },
  {
    path: 'prediccion',
    component: PrediccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
