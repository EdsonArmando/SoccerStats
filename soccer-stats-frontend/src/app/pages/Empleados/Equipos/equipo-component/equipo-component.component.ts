import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-equipo-component',
  templateUrl: './equipo-component.component.html',
  styleUrls: ['./equipo-component.component.css']
})
export class EquipoComponentComponent implements OnInit {
  //Foto
  archivocargado:File | undefined;
  photo2 : string | ArrayBuffer | any;
  //
  breakpoint: number | undefined;
  paises : any;
  constructor(public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService,) { }

  ngOnInit(): void {
    this.apiCiudades.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
    });
  }

  onResize(event:any) {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 3;
  }
  /////////////////////////////////////////////VARIABLES PARA INGRESO DE DATOS////////////////////////
  name: string = "";
  photo : string = "na";
  fundation_date : string = "";
  id_country : number = 0;
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
    console.log(this.photo2);
    let data = {
      name : this.name,
      photo : this.photo,
      fundation_date : String(this.fundation_date),
      id_country : Number(this.id_country)
    }
    console.log(data);
    this.apiRest.addEquipo(data).subscribe((result) => {
      console.log('Succes');
      alert('Equipo Agregado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/equipo"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }
}
