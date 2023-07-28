import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {Team} from "../../Equipos/equipo-list/equipo-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-acciones-log',
  templateUrl: './acciones-log.component.html',
  styleUrls: ['./acciones-log.component.css']
})
export class AccionesLogComponent implements OnInit {
  logs : any;
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {
      this.apiRest.getAllLogs().subscribe((data: any) => {
        this.logs = data.data;
      });
    //}, 5000);
  }

}
