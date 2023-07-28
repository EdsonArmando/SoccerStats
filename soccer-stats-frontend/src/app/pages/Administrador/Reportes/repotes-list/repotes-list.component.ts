import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ReportesService } from "../../../../services/AdminReportes/reportes.service";
import  { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";
import {ActivatedRoute} from "@angular/router";

import jsPDF from 'jspdf';
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// @ts-ignore
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-repotes-list',
  templateUrl: './repotes-list.component.html',
  styleUrls: ['./repotes-list.component.css']
})
export class RepotesListComponent implements OnInit {
  equipos : any;
  paises : any;
  ipESB = localStorage.getItem('ipESB');
  id_team : number = 0;
  membership : number = 0;
  genero : number = 0;
  option : String = "";
  idPais : number = 0;
  edad : number = 0;
   data : any;
  repo1 : boolean = false;
  repo2 : boolean = false;
  repo3 : boolean = false;
  repo4 : boolean = false;
  repo5 : boolean = false;
  repo6 : boolean = false;
  repo7 : boolean = false;
  repo8 : boolean = false;
  repo9 : boolean = false;
  repo10 : boolean = false;
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;
  @ViewChild('pdfTable2') pdfTable2: ElementRef | undefined;
  @ViewChild('pdfTable5') pdfTable5: ElementRef | undefined;
  @ViewChild('pdfTable6') pdfTable6: ElementRef | undefined;
  @ViewChild('pdfTable7') pdfTable7: ElementRef | undefined;
  @ViewChild('pdfTable8') pdfTable8: ElementRef | undefined;
  @ViewChild('pdfTable9') pdfTable9: ElementRef | undefined;
  @ViewChild('pdfTable10') pdfTable10: ElementRef | undefined;

  constructor(private apiRest: ReportesService,
              private apiRest2: EquiposService,
              private apiRest3: CiudadesService,
              private route: ActivatedRoute,) { }
  public downloadAsPDF(id: any) {
    const doc = new jsPDF();
    if (id ==1){
      // @ts-ignore
      const pdfTable = this.pdfTable.nativeElement;

      var html = htmlToPdfmake(pdfTable.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 2){
      // @ts-ignore
      const pdfTable2 = this.pdfTable2.nativeElement;

      var html = htmlToPdfmake(pdfTable2.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 5){
      // @ts-ignore
      const pdfTable5 = this.pdfTable5.nativeElement;

      var html = htmlToPdfmake(pdfTable5.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 6){
      // @ts-ignore
      const pdfTable6 = this.pdfTable6.nativeElement;

      var html = htmlToPdfmake(pdfTable6.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 7){
      // @ts-ignore
      const pdfTable7 = this.pdfTable7.nativeElement;

      var html = htmlToPdfmake(pdfTable7.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 8){
      // @ts-ignore
      const pdfTable8 = this.pdfTable8.nativeElement;

      var html = htmlToPdfmake(pdfTable8.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 9){
      // @ts-ignore
      const pdfTable9 = this.pdfTable9.nativeElement;

      var html = htmlToPdfmake(pdfTable9.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 10){
      // @ts-ignore
      const pdfTable10 = this.pdfTable10.nativeElement;

      var html = htmlToPdfmake(pdfTable10.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }
  }
  ngOnInit(): void {
    this.apiRest2.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
    this.apiRest3.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
    });
  }
  Reporte1(){
    console.log(this.ipESB);
    this.repo1 = true;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte1(this.id_team, this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte2(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = true;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte2(this.membership,this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte3(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = true;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte3(this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte4(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = true;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte4(this.ipESB).subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
  }
  Reporte5(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = true;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte5(this.idPais, this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte6(){
    console.log(this.ipESB);
    let gen = "";
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = true;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    if(this.genero == 1){
      gen = "M"
    }else if(this.genero == 2){
      gen = "F"
    }else if(this.genero == 3){
      gen = "U"
    }
    this.apiRest.getReporte6(gen, this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte7(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = true;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte7(this.edad, this.ipESB).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  Reporte8(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = true;
    this.repo9 = false;
    this.repo10 = false;
    this.apiRest.getReporte8(this.option, this.ipESB).subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
    this.option = "0";
  }
  Reporte9(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = true;
    this.repo10 = false;
    this.apiRest.getReporte9(this.id_team,this.option, this.ipESB).subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
  }
  Reporte10(){
    console.log(this.ipESB);
    this.repo1 = false;
    this.repo2 = false;
    this.repo3 = false;
    this.repo4 = false;
    this.repo5 = false;
    this.repo6 = false;
    this.repo7 = false;
    this.repo8 = false;
    this.repo9 = false;
    this.repo10 = true;
    this.apiRest.getReporte10(this.ipESB).subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
  }

}
