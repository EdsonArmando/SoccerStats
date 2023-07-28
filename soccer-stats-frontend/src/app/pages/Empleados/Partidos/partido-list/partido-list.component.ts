import { Component, OnInit } from '@angular/core';
import {Tecnico} from "../../Tecnicos/tecnico-list/tecnico-list.component";
import {EquiposService} from "../../../../services/EmpleadosService/equipos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {
  allPartidos: Partido[] | undefined;
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {

      this.apiRest.getAllPartidos().subscribe((result) => {
        this.allPartidos = result.data;
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    //}, 2000);
  }
  deletePartido(id: any){
    /*this.apiRest.de(id).subscribe((data: any) => {
      console.log(data);
      alert("Estadio Eliminado");
    });*/
  }
}
export interface Partido{
  id: number,
  game_date: Date,
  attendees : number,
  result_local : number,
  result_visiting : number,
  state : number,
  idStadium : number,
  idTeamLocal: number,
  idTeamVisiting: number,
  idCompetition: number
}
