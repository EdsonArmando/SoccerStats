import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './client/profile/profile.component';
import { NewsComponent } from '../Empleados/news/news.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NonmembernewsComponent } from './client/nonmembernews/nonmembernews.component';
import { MembernewsComponent } from './client/membernews/membernews.component';
import { ReportListComponent } from './Reportes/report-list/report-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReportsComponent } from './reports/reports.component';
import { PrediccionComponent } from './prediccion/prediccion.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NewsComponent,
    NonmembernewsComponent,
    MembernewsComponent,
    ReportListComponent,
    ReportsComponent,
    PrediccionComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})
export class PrincipalModule { }
