import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-acciones-create',
  templateUrl: './acciones-create.component.html',
  styleUrls: ['./acciones-create.component.css']
})
export class AccionesCreateComponent implements OnInit {
  allJugadores : any;
  allTecnicos : any;
  dataEquipoTecnico : any;
  equipos : any;
  dataEquipo : any;
  jugadores = {
    "id_person" : -1,
    "rol" : 1
  }
  Tecnicos = {
    "id_person" : -1,
    "rol" : 2
  }
  constructor(public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService,) { }

  returnTeam(id: any){
    let result=this.dataEquipo.filter((element: { idPlayer: any; }) => element.idPlayer == id);
    return result[0].idTeam;
  }
  returnTeamTecnico(id: any){
    let result=this.dataEquipoTecnico.filter((element: { idDirector: any; }) => element.idDirector == id);
    return result[0].idTeam;
  }
  ngOnInit(): void {
    setInterval(() => {
      try{
        this.id_team_origin = this.returnTeam(this.id_player);
      }catch (e){
        console.log(e);
      }
      this.id_team_origin2 = this.returnTeamTecnico(this.id_coach);
    }, 2000);
    this.apiRest.getPersona(this.jugadores).subscribe((result) => {
      this.allJugadores = result.data[0].persona;
      this.dataEquipo = result.data[0].equipos;
    }, (err) => {
      console.log(err);
    });
    this.apiRest.getPersona(this.Tecnicos).subscribe((result) => {
      this.allTecnicos = result.data[0].persona;
      this.dataEquipoTecnico = result.data[0].equipos;
      console.log(this.dataEquipoTecnico);
    }, (err) => {
      console.log(err);
    });
    this.apiRest.getAllTeams().subscribe((result) => {
      this.equipos = result.data;
    }, (err) => {
      console.log(err);
    });
  }
  //Datos Tranferencia Jugadores
  id_player : number = 0;
  id_team_origin : number = 0;
  id_team_destination : number = 0;

  //Datos Tranferencia Tecnicos
  id_coach : number = 0;
  id_team_origin2 : number = 0;
  id_team_destination2 : number = 0;

  realizarTransferencia(){
    let data = {
      id_player : this.id_player,
      id_team_origin : this.id_team_origin,
      id_team_destination : this.id_team_destination
    }
    console.log(data);
    this.apiRest.transferPlayer(data).subscribe((result) => {
      console.log('Succes');
      alert('Transferencia de Jugador Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  realizarTransferenciaTecnico(){
    let data = {
      id_coach : this.id_coach,
      id_team_origin : this.id_team_origin2,
      id_team_destination : this.id_team_destination2
    }
    console.log(data);
    this.apiRest.transferDirector(data).subscribe((result) => {
      console.log('Succes');
      alert('Transferencia de Tecnico Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/logsAccion"]);
  }
}
