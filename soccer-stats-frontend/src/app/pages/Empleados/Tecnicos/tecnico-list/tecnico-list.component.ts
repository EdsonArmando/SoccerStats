import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {Team} from "../../Equipos/equipo-list/equipo-list.component";
import {ActivatedRoute} from "@angular/router";
import {Estadio} from "../../Estadios/estadio-list/estadio-list.component";
import {Jugador} from "../../Jugadores/jugador-list/jugador-list.component";

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  allJugadores: Tecnico[] | undefined;
  dataEquipo: any;
  startDate: string = "";
  id_team: number = 12;
  data : any = {
    "id_person" : -1,
    "rol" : 2
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
    let result=this.dataEquipo.filter((element: { idDirector: any; }) => element.idDirector == id);
    return result[0].idTeam;
  }
  returnDate(id: any){
    let result=this.dataEquipo.filter((element: { idDirector: any; }) => element.idDirector == id);
    return result[0].start_date;
  }


  deleteTecnico(id: any){
    let data : any = {
      "id_person" : id,
      "rol" : 2
    };
    this.apiRest.deletePersona(data).subscribe((result) => {
      console.log('Succes');
      alert('Jugador Eliminado Exitosamente');
    }, (err) => {
      console.log(err);
    });
  }
}
export interface Tecnico{
  id: number,
  name: string,
  lastname : string,
  birthdate : Date,
  idCountry : number,
  position : string,
  status : number,
  photo: string
}
