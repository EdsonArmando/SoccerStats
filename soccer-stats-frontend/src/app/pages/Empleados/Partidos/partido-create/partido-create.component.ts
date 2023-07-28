import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-partido-create',
  templateUrl: './partido-create.component.html',
  styleUrls: ['./partido-create.component.css']
})
export class PartidoCreateComponent implements OnInit {
  breakpoint: number | undefined;
  paises : any;
  competiciones : any;
  equipos : any;
  estadios : any;
  constructor(public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService,) { }

  ngOnInit(): void {
    this.apiCiudades.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
    });
    this.apiRest.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
    this.apiRest.getAllCompeticion().subscribe((data: any) => {
      this.competiciones = data.data;
    });
    this.apiRest.getAllEstadios().subscribe((data: any) => {
      this.estadios = data.data;
    });
  }
  onResize(event:any) {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 3;
  }
  /////////////////////////////////////////////VARIABLES PARA INGRESO DE DATOS////////////////////////
  id: number = 0;
  game_date: string = "";
  attendees : number = 0;
  result_local : number= 0;
  result_visiting : number= 0 ;
  state : number= 0;
  idStadium : number= 0;
  idTeamLocal: number= 0;
  idTeamVisiting: number= 0;
  idCompetition: number= 0;

  Register() {
    let data = {
      game_date: this.game_date,
      attendees : this.attendees,
      result_local : this.result_local,
      result_visiting : this.result_visiting,
      state : this.state,
      id_stadium : this.idStadium,
      id_team_local: this.idTeamLocal,
      id_team_visiting: this.idTeamVisiting,
      id_competition: this.idCompetition
    }
    this.apiRest.addPartido(data).subscribe((result) => {
      console.log('Succes');
      alert('Partido Agregado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/admin/partidos"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }

}
