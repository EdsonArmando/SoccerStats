import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {Team} from "../../Equipos/equipo-list/equipo-list.component";
import {ActivatedRoute} from "@angular/router";
import {Estadio} from "../../Estadios/estadio-list/estadio-list.component";

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {
  allJugadores: Jugador[] | undefined;
  dataEquipo: any;
  startDate: string = "";
  id_team: number = 12;
  data : any = {
    "id_person" : -1,
    "rol" : 1
  };
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {

      this.apiRest.getPersona(this.data).subscribe((result) => {
        this.allJugadores = result.data[0].persona;
        this.dataEquipo = result.data[0].equipos;
      }, (err) => {
        console.log(err);
      });
    //}, 2000);
  }

  returnTeam(id: any){
    let result=this.dataEquipo.filter((element: { idPlayer: any; }) => element.idPlayer == id);
    return result[0].idTeam;
  }
  returnDate(id: any){
    let result=this.dataEquipo.filter((element: { idPlayer: any; }) => element.idPlayer == id);
    return result[0].start_date;
  }


  deleteJugador(id: any){
    let data : any = {
      "id_person" : id,
      "rol" : 1
    };
    this.apiRest.deletePersona(data).subscribe((result) => {
      console.log('Succes');
      alert('Jugador Eliminado Exitosamente');
    }, (err) => {
      console.log(err);
    });
  }
}
export interface Jugador{
  id: number,
  name: string,
  lastname : string,
  birthdate : Date,
  idCountry : number,
  position : string,
  status : number,
  photo: string
}

