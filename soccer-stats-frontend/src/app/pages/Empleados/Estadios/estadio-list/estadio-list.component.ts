import { Component, OnInit } from '@angular/core';
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import {Team} from "../../Equipos/equipo-list/equipo-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-estadio-list',
  templateUrl: './estadio-list.component.html',
  styleUrls: ['./estadio-list.component.css']
})
export class EstadioListComponent implements OnInit {
  allEstadio: Estadio[] | undefined;
  constructor(private apiRest: EquiposService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    //setInterval(() => {
      this.apiRest.getAllEstadios().subscribe((data: any) => {
        this.allEstadio = data.data;
      });
    //}, 3000);
    this.apiRest.getAllEstadios().subscribe((data: any) => {
      this.allEstadio = data.data;
    });
  }
  deleteStadio(id: any){
    this.apiRest.deleteEstadio(id).subscribe((data: any) => {
      console.log(data);
      alert("Estadio Eliminado");
    });
  }
}
export interface Estadio{
  id: number,
  name: string,
  photo : string,
  idCountry : number,
  capacity : number,
  address : string,
  state : number,
  fundation_date: Date
}


