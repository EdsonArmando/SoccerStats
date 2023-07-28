import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileComponent } from './Cliente/client/profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
//import { NewsComponent } from './Cliente/client/news/news.component';
import { NewsCreateComponent } from './Empleados/news/create/news-create/news-create.component';
import { EquipoComponentComponent } from './Empleados/Equipos/equipo-component/equipo-component.component';
import { EquipoListComponent } from './Empleados/Equipos/equipo-list/equipo-list.component';
import { EquipoEditarComponent } from './Empleados/Equipos/equipo-editar/equipo-editar.component';
import { EstadioCreateComponent } from './Empleados/Estadios/estadio-create/estadio-create.component';
import { EstadioListComponent } from './Empleados/Estadios/estadio-list/estadio-list.component';
import { EstadioUpdateComponent } from './Empleados/Estadios/estadio-update/estadio-update.component';
import { CompeticionCreateComponent } from './Empleados/Competiciones/competicion-create/competicion-create.component';
import { CompeticionListComponent } from './Empleados/Competiciones/competicion-list/competicion-list.component';
import { CompeticionUpdateComponent } from './Empleados/Competiciones/competicion-update/competicion-update.component';
import { JugadorCreateComponent } from './Empleados/Jugadores/jugador-create/jugador-create.component';
import { JugadorListComponent } from './Empleados/Jugadores/jugador-list/jugador-list.component';
import { JugadorUpdateComponent } from './Empleados/Jugadores/jugador-update/jugador-update.component';
import { TecnicoCreateComponent } from './Empleados/Tecnicos/tecnico-create/tecnico-create.component';
import { TecnicoListComponent } from './Empleados/Tecnicos/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './Empleados/Tecnicos/tecnico-update/tecnico-update.component';
import { PartidoListComponent } from './Empleados/Partidos/partido-list/partido-list.component';
import { PartidoCreateComponent } from './Empleados/Partidos/partido-create/partido-create.component';
import { AccionesLogComponent } from './Empleados/Acciones/acciones-log/acciones-log.component';
import { AccionesCreateComponent } from './Empleados/Acciones/acciones-create/acciones-create.component';
import { IncidenciaCreateComponent } from './Empleados/Acciones/Incidencias/incidencia-create/incidencia-create.component';
import { IncidenciaListComponent } from './Empleados/Acciones/Incidencias/incidencia-list/incidencia-list.component';
@NgModule({
  declarations: [
    NewsCreateComponent,
    EquipoComponentComponent,
    EquipoListComponent,
    EquipoEditarComponent,
    EstadioCreateComponent,
    EstadioListComponent,
    EstadioUpdateComponent,
    CompeticionCreateComponent,
    CompeticionListComponent,
    CompeticionUpdateComponent,
    JugadorCreateComponent,
    JugadorListComponent,
    JugadorUpdateComponent,
    TecnicoCreateComponent,
    TecnicoListComponent,
    TecnicoUpdateComponent,
    PartidoListComponent,
    PartidoCreateComponent,
    AccionesLogComponent,
    AccionesCreateComponent,
    IncidenciaCreateComponent,
    IncidenciaListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
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
    FormsModule
  ]
})
export class PagesModule { }
