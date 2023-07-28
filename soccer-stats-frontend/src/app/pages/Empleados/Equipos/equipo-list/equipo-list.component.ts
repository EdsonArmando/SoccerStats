import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  allTeam: Team[] | undefined;
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {
      this.apiRest.getAllTeams().subscribe((data: any) => {
        this.allTeam = data.data;
      });
    //}, 5000);
    this.apiRest.getAllTeams().subscribe((data: any) => {
      this.allTeam = data.data;
    });
  }
  deleteTeam(id: any){
    this.apiRest.deleteTeam(id).subscribe((data: any) => {
      console.log(data);
      alert("Equipo Eliminado");
    });
  }
}
export interface Team{
  id: number,
  name: string,
  photo : string,
  idCountry : number,
  foundation_date: Date
}

