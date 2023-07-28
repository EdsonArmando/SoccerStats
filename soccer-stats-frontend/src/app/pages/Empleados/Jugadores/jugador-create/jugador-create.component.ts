import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";


@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.css']
})
export class JugadorCreateComponent implements OnInit {
  //Foto
  archivocargado:File | undefined;
  photo2 : string | ArrayBuffer | any;
  //
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
  id: number = 0;
  name: string = "";
  lastname : string = "";
  birthdate : string = "";
  fechaEquipo : string = "";
  idCountry : number = 0;
  position : string = "";
  status : number = 0;
  photo: string = "na";
  id_team: number = 0;
  routlogin(){
    this.router.navigate(['/login']);
  }
  routregister(){
    this.router.navigate(['/register']);
  }
  onFileChanged(event : any){
    this.archivocargado = event.target.files[0];
    let reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(this.archivocargado);
    // @ts-ignore
    let nameImage = this.archivocargado.name.toString();
    let filetype = this.archivocargado?.type.toString();
    let filebase64:any = "";

    reader.onload = ( event2:any ) => {
      filebase64 = reader.result?.toString();
      filebase64 = filebase64.replace(/data:.+?,/, "");
      this.photo2 = filebase64;
      let dataImage = {
        NOMBRE : nameImage,
        CONTENIDO : filetype,
        BASE64 : filebase64
      };
      this.apiRest.UploadFile(dataImage).subscribe((result) => {
        this.photo = result.downloadURL;
        console.log(result.downloadURL);
      }, (err) => {
        console.log(err);
      });
    }
  }

  Register(){
    let data = {
      name : this.name,
      lastname  : this.lastname,
      birthday  : this.birthdate,
      nationality  : this.idCountry,
      position  : this.position,
      id_team : this.id_team,
      status  : this.status,
      photo : this.photo,
      fechaEquipo: this.fechaEquipo,
      rol : 1
    }
    console.log(data);
    this.apiRest.addPersona(data).subscribe((result) => {
      console.log('Succes');
      alert('Jugador Agregado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/jugadores"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }


}
