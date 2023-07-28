import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EquiposService} from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-jugador-update',
  templateUrl: './jugador-update.component.html',
  styleUrls: ['./jugador-update.component.css']
})
export class JugadorUpdateComponent implements OnInit {
  //Foto
  archivocargado:File | undefined;
  breakpoint: number | undefined;
  id: number = 0;
  paises : any;
  equipos : any;
  name: string = "";
  lastname : string = "";
  birthdate : string = "";
  startDate : string = "";
  idCountry : number = 0;
  position : string = "";
  status : number = 0;
  photo: string = "";
  id_team: number = 0;
  constructor(private activatedroute:ActivatedRoute,public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.name = this.activatedroute.snapshot.params['name'];
    this.photo = this.activatedroute.snapshot.params['photo'];
    this.lastname = this.activatedroute.snapshot.params['lastname'];
    this.birthdate = this.activatedroute.snapshot.params['birthdate'];
    this.idCountry = this.activatedroute.snapshot.params['idCountry'];
    this.position = this.activatedroute.snapshot.params['position'];
    this.status = this.activatedroute.snapshot.params['status'];
    this.id_team = this.activatedroute.snapshot.params['idTeam'];
    this.startDate = this.activatedroute.snapshot.params['startDate'];
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
      id_person : Number(this.id),
      name : this.name,
      lastname  : this.lastname,
      birthday  : this.birthdate,
      nationality  : this.idCountry,
      position  : this.position,
      id_team : Number(this.id_team),
      status  : this.status,
      photo : this.photo,
      fechaEquipo: this.startDate,
      rol : 1
    }
    console.log(data);
    this.apiRest.updatePersona(data).subscribe((result) => {
      console.log('Succes');
      alert('Jugador Editado Exitosamente');
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
