import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {Team} from "../../Equipos/equipo-list/equipo-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-competicion-list',
  templateUrl: './competicion-list.component.html',
  styleUrls: ['./competicion-list.component.css']
})
export class CompeticionListComponent implements OnInit {
  allCompeticion: Competicion[] | undefined;
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {
      this.apiRest.getAllCompeticion().subscribe((data: any) => {
        this.allCompeticion = data.data;
      });
    //}, 5000);
    this.apiRest.getAllCompeticion().subscribe((data: any) => {
      this.allCompeticion = data.data;
    });
  }
  deleteCompeticion(id: any){
    alert(id);
    this.apiRest.deleteCompeticion(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}
export interface Competicion{
  id: number,
  name: string,
  type : string,
  year : number,
  idCountry : number,
  championTeam : number,
  foundation_date: Date
}
