import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EquiposService } from "../../../../../services/EmpleadosService/equipos.service";
import { NoticeService } from "../../../../../services/EmpleadosService/notice.service";

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  breakpoint: number | undefined;
  archivocargado:File | undefined;
  equipos : any;
  constructor(public router: Router, private apiRest: EquiposService,private apiRest2: NoticeService,) { }
  ngOnInit(): void {
    this.apiRest.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
  }

  onResize(event:any) {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 3;
  }
  /////////////////////////////////////////////VARIABLES PARA INGRESO DE DATOS////////////////////////
  title: string = "";
  description : string = "";
  date : string = "";
  photo : string = "na"
  idEquipo : number = 0;
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
        idUser : 1,
        title : this.title,
        description : this.description,
        date : String(this.date),
        id_team : Number(this.idEquipo)
    }
    this.apiRest2.addNotice(data).subscribe((result) => {
      console.log('Succes');
      alert('Noticia Agregado Exitosamente');
    }, (err) => {
      console.log(err);
    });
    this.redirigir();
  }
  redirigir(){
    this.router.navigate(["/pages/empleado/news"]);
  }
  routInicio(){
    this.router.navigate(['']);
  }
}
