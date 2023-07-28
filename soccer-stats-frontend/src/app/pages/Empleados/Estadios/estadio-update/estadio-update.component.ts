import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EquiposService} from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";

@Component({
  selector: 'app-estadio-update',
  templateUrl: './estadio-update.component.html',
  styleUrls: ['./estadio-update.component.css']
})
export class EstadioUpdateComponent implements OnInit {
  archivocargado:File | undefined;
  breakpoint: number | undefined;
  name: string = "";
  photo : string = "";
  fundation_date : string = "";
  id_country : number = 0;
  id : number = 0;
  capacity : number = 0;
  address : string = "";
  state : number = 0;
  paises : any;
  constructor(private activatedroute:ActivatedRoute,public router: Router, private apiRest: EquiposService,private apiCiudades: CiudadesService) { }

  ngOnInit(): void {
    this.name = this.activatedroute.snapshot.params['name'];
    this.photo = this.activatedroute.snapshot.params['photo'];
    this.fundation_date = this.activatedroute.snapshot.params['fundacion'];
    this.id_country = this.activatedroute.snapshot.params['ciudad'];
    this.id = this.activatedroute.snapshot.params['id'];
    this.capacity = this.activatedroute.snapshot.params['capacity'];
    this.address = this.activatedroute.snapshot.params['address'];
    this.state = this.activatedroute.snapshot.params['state'];
    this.apiCiudades.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
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
      }, (err) => {
        console.log(err);
      });
    }
  }
  Register(){
    console.log(this.photo);
    let data = {
      id : this.id,
      name : this.name,
      photo : this.photo,
      fundation_date : String(this.fundation_date),
      id_country : Number(this.id_country),
      capacity : Number(this.capacity),
      state : Number(this.state),
      address : this.address,
    }
    console.log(data);
    this.apiRest.updateEstadio(data).subscribe((result) => {
      console.log('Succes');
      alert('Estadio Editado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/estadios"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }
}
