import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-competicion-create',
  templateUrl: './competicion-create.component.html',
  styleUrls: ['./competicion-create.component.css']
})
export class CompeticionCreateComponent implements OnInit {
  breakpoint: number | undefined;
  paises : any;
  equipos : any;
  constructor(public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService,) { }

  ngOnInit(): void {
    this.apiCiudades.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
    });
    this.apiRest.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
  }
  onResize(event:any) {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 3;
  }
  /////////////////////////////////////////////VARIABLES PARA INGRESO DE DATOS////////////////////////
  name: string = "";
  id_country : number = 0;
  champion_team : number = 0;
  type : String = "";
  year : number = 0;
  routlogin(){
    this.router.navigate(['/login']);
  }
  routregister(){
    this.router.navigate(['/register']);
  }

  Register(){
    let data = {
      name : this.name,
      country : Number(this.id_country),
      champion_team : Number(this.champion_team),
      year : Number(this.year),
      type : String(this.type)
    }
    console.log(data);
    this.apiRest.addCompetidcion(data).subscribe((result) => {
      console.log('Succes');
      alert('Competicion Agregado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/competiciones"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }


}
