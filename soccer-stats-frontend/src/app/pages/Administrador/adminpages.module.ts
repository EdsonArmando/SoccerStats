import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpagesRoutingModule } from './adminpages-routing.module';
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
import { AdminsidenavbarComponent } from './adminsidenavbar/adminsidenavbar.component';
import { RepotesListComponent } from './Reportes/repotes-list/repotes-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [

    RepotesListComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    AdminpagesRoutingModule,
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
    MatSlideToggleModule
  ]
})
export class AdminpagesModule { }
