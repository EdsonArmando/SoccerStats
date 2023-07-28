import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../../services/EmpleadosService/equipos.service";
@Component({
  selector: 'app-incidencia-list',
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.css']
})
export class IncidenciaListComponent implements OnInit {
  incidencias : any;
  constructor(public apiRest: EquiposService ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.apiRest.getAllIncidencias().subscribe((data: any) => {
        this.incidencias = data.data;
      });
    }, 3000);
  }
  deleteIncidencia(id : any){

  }
}
