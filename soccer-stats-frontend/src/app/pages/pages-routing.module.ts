import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponentComponent } from "./Empleados/Equipos/equipo-component/equipo-component.component";
import { NewsCreateComponent } from './Empleados/news/create/news-create/news-create.component';
import {EquipoListComponent} from "./Empleados/Equipos/equipo-list/equipo-list.component";
import {EquipoEditarComponent } from "./Empleados/Equipos/equipo-editar/equipo-editar.component";
import {EstadioListComponent } from "./Empleados/Estadios/estadio-list/estadio-list.component";
import { EstadioCreateComponent } from "./Empleados/Estadios/estadio-create/estadio-create.component";
import { EstadioUpdateComponent } from "./Empleados/Estadios/estadio-update/estadio-update.component";
import { CompeticionListComponent } from "./Empleados/Competiciones/competicion-list/competicion-list.component";
import { CompeticionCreateComponent } from "./Empleados/Competiciones/competicion-create/competicion-create.component";
import { CompeticionUpdateComponent } from "./Empleados/Competiciones/competicion-update/competicion-update.component";
import {NewsComponent} from "./Empleados/news/news.component";
import { JugadorListComponent } from "./Empleados/Jugadores/jugador-list/jugador-list.component";
import { JugadorCreateComponent } from "./Empleados/Jugadores/jugador-create/jugador-create.component";
import { JugadorUpdateComponent } from "./Empleados/Jugadores/jugador-update/jugador-update.component";
import { TecnicoListComponent } from "./Empleados/Tecnicos/tecnico-list/tecnico-list.component";
import { TecnicoCreateComponent } from "./Empleados/Tecnicos/tecnico-create/tecnico-create.component";
import { TecnicoUpdateComponent } from "./Empleados/Tecnicos/tecnico-update/tecnico-update.component";
import { PartidoListComponent } from "./Empleados/Partidos/partido-list/partido-list.component";
import { AccionesLogComponent} from "./Empleados/Acciones/acciones-log/acciones-log.component";
import { AccionesCreateComponent } from "./Empleados/Acciones/acciones-create/acciones-create.component";
import { IncidenciaListComponent } from "./Empleados/Acciones/Incidencias/incidencia-list/incidencia-list.component";
import { IncidenciaCreateComponent } from "./Empleados/Acciones/Incidencias/incidencia-create/incidencia-create.component";
import { ProfileComponent } from "./Cliente/client/profile/profile.component";
import { SecurityemployeeGuard } from '../guard/securityemployee.guard';
import { SecurityGuard } from '../guard/security.guard';


const routes: Routes = [

  {   path: 'create',
   component: NewsCreateComponent,
   
  },
  {   path: 'logsAccion',
    component: AccionesLogComponent,
    
  },
  {   path: 'transfer',
    component: AccionesCreateComponent,
    
  },
  {   path: 'listIncidencias',
    component: IncidenciaListComponent,
    
  },
  {   path: 'createIncidencia',
    component: IncidenciaCreateComponent,
    
  },
  {   path: 'createTeam',
    component: EquipoComponentComponent,
    
  },
  {   path: 'createEstadio',
    component: EstadioCreateComponent,
    
  },
  {   path: 'createTorneo',
    component: CompeticionCreateComponent,
    
  },
  {   path: 'news',
    component: NewsComponent,
    
  },
  {   path: 'equipo',
    component: EquipoListComponent,
    
  },
  {   path: 'estadios',
    component: EstadioListComponent,
    
  },
  {   path: 'updateEquipo',
    component: EquipoEditarComponent,
    
  },
  {   path: 'updateTecnico',
    component: TecnicoUpdateComponent,
    
  },
  {   path: 'updateCompeticion',
    component: CompeticionUpdateComponent,
    
  },
  {   path: 'updateEstadio',
    component: EstadioUpdateComponent,
    
  },
  {   path: 'competiciones',
    component: CompeticionListComponent,
    
  },
  {   path: 'jugadores',
    component: JugadorListComponent,
    
  },
  {   path: 'createJugador',
    component: JugadorCreateComponent,
    
  },
  {   path: 'createTecnico',
    component: TecnicoCreateComponent,
    
  },
  {   path: 'updateJugador',
    component: JugadorUpdateComponent,
    
  },
  {   path: 'partidos',
    component: PartidoListComponent,
    
  },
  {   path: 'tecnicos',
    component: TecnicoListComponent,
    
  }
  ,
  {   path: 'profile',
    component: ProfileComponent,
    canActivate:[SecurityemployeeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
