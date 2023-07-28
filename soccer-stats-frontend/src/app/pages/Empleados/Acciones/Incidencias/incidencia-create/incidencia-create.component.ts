import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../../services/EmpleadosService/equipos.service";

@Component({
  selector: 'app-incidencia-create',
  templateUrl: './incidencia-create.component.html',
  styleUrls: ['./incidencia-create.component.css']
})
export class IncidenciaCreateComponent implements OnInit {
  id_game : number = 0;
  id_player: number = 0;
  id_team: number = 0;
  games : any;
  equipos: any;
  descripcion: string = "";
  minuto: number = 0;
  jugadores = {
    "id_person" : -1,
    "rol" : 1
  }
  allJugadores : any;
  dataEquipo : any;
  constructor(public apiRest: EquiposService,public router: Router,) { }
  returnTeam(id: any){
    let result=this.dataEquipo.filter((element: { idPlayer: any; }) => element.idPlayer == id);
    return result[0].idTeam;
  }
  ngOnInit(): void {
    setInterval(() => {
      try{
        this.id_team = this.returnTeam(this.id_player);
      }catch (e){
        console.log(e);
      }
    }, 2000);
    this.apiRest.getPersona(this.jugadores).subscribe((result) => {
      this.allJugadores = result.data[0].persona;
      this.dataEquipo = result.data[0].equipos;
    }, (err) => {
      console.log(err);
    });
    this.apiRest.getAllPartidos().subscribe((data: any) => {
      this.games = data.data;
      console.log(this.games);
    });
    this.apiRest.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
  }
  ingresarIncidencia(){
    let data = {
      id_game : this.id_game,
      id_player : this.id_player,
      id_team : this.id_team,
      descripcion: this.descripcion,
      minuto: this.minuto
    }
    console.log(data);
    this.apiRest.addIncidencia(data).subscribe((result) => {
      console.log('Succes');
      alert('Incidencia de Jugador Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/listIncidencias"]);
  }
}
