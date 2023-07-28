import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EquiposService} from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-competicion-update',
  templateUrl: './competicion-update.component.html',
  styleUrls: ['./competicion-update.component.css']
})
export class CompeticionUpdateComponent implements OnInit {
  breakpoint: number | undefined;
  name: string = "";
  type : string = "";
  id_country : number = 0;
  championTeam : number = 0;
  id : number = 0;
  year : number = 0;
  paises : any;
  equipos : any;
  constructor(private activatedroute:ActivatedRoute,public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService) { }

  ngOnInit(): void {
    this.name = this.activatedroute.snapshot.params['name'];
    this.id_country = this.activatedroute.snapshot.params['ciudad'];
    this.championTeam = this.activatedroute.snapshot.params['championTeam'];
    this.id = this.activatedroute.snapshot.params['id'];
    this.year = this.activatedroute.snapshot.params['year'];
    this.type = this.activatedroute.snapshot.params['type'];
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
  routregister(){
    this.router.navigate(['/register']);
  }
  Register(){
    let data = {
      id_competition : this.id,
      name : this.name,
      country : Number(this.id_country),
      year : Number(this.year),
      type : String(this.type),
      champion_team : this.championTeam,
    }
    console.log(data);
    this.apiRest.updateCompeticion(data).subscribe((result) => {
      console.log('Succes');
      alert('Competicion Editado Exitosamente');
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
