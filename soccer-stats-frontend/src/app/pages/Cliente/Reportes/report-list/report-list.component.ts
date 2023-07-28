import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ReporteClientService } from "../../../../services/ClienteReporte/reporte-client.service";
import  { EquiposService } from "../../../../services/EmpleadosService/equipos.service";
import { CiudadesService } from "../../../../services/CiudadesService/ciudades.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import jsPDF from 'jspdf';
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// @ts-ignore
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  showRepo1 : boolean = false;
  showRepo2 : boolean = false;
  showRepo3 : boolean = false;
  showRepo4 : boolean = false;
  showRepo5 : boolean = false;
  showRepo6 : boolean = false;
  showRepo7 : boolean = false;
  showRepo8 : boolean = false;
  showRepo9 : boolean = false;
  showRepo11 : boolean = false;
  showRepo12 : boolean = false;
  showRepo13 : boolean = false;
  showRepo14 : boolean = false;
  showRepo15 : boolean = false;
  showRepo16 : boolean = false;
  showRepo17 : boolean = false;
  equipos : any;
  paises : any;
  id_team: any;
  capacity: any;
  goals: any;
  competiciones : any;
  year : any;
  idTeam2 : any;
  players: any;
  age : any;
  idCountry : any;
  idcompetition: any;
  data : any;
  //PDF reportes
  title = 'htmltopdf';

  @ViewChild('pdfTable1') pdfTable1: ElementRef | undefined;
  @ViewChild('pdfTable2') pdfTable2: ElementRef | undefined;
  @ViewChild('pdfTable3') pdfTable3: ElementRef | undefined;
  @ViewChild('pdfTable4') pdfTable4: ElementRef | undefined;
  @ViewChild('pdfTable5') pdfTable5: ElementRef | undefined;
  @ViewChild('pdfTable6') pdfTable6: ElementRef | undefined;
  @ViewChild('pdfTable7') pdfTable7: ElementRef | undefined;
  @ViewChild('pdfTable8') pdfTable8: ElementRef | undefined;
  @ViewChild('pdfTable9') pdfTable9: ElementRef | undefined;
  @ViewChild('pdfTable11') pdfTable11: ElementRef | undefined;
  @ViewChild('pdfTable12') pdfTable12: ElementRef | undefined;
  @ViewChild('pdfTable13') pdfTable13: ElementRef | undefined;
  @ViewChild('pdfTable14') pdfTable14: ElementRef | undefined;
  @ViewChild('pdfTable15') pdfTable15: ElementRef | undefined;
  @ViewChild('pdfTable16') pdfTable16: ElementRef | undefined;
  @ViewChild('pdfTable17') pdfTable17: ElementRef | undefined;
  constructor(public apiRest: ReporteClientService,private apiRest2: EquiposService,
              private apiRest3: CiudadesService,
              private route: ActivatedRoute,) { }
  public downloadAsPDF(id: any) {
    const doc = new jsPDF();
    if (id ==1){
      // @ts-ignore
      const pdfTable1 = this.pdfTable1.nativeElement;

      var html = htmlToPdfmake(pdfTable1.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 2){
      // @ts-ignore
      const pdfTable2 = this.pdfTable2.nativeElement;

      var html = htmlToPdfmake(pdfTable2.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 3){
      // @ts-ignore
      const pdfTable3 = this.pdfTable3.nativeElement;

      var html = htmlToPdfmake(pdfTable3.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 4){
      // @ts-ignore
      const pdfTable4 = this.pdfTable4.nativeElement;

      var html = htmlToPdfmake(pdfTable4.innerHTML);

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
    }else if(id == 11){
      // @ts-ignore
      const pdfTable11 = this.pdfTable11.nativeElement;

      var html = htmlToPdfmake(pdfTable11.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 12){
      // @ts-ignore
      const pdfTable12 = this.pdfTable12.nativeElement;

      var html = htmlToPdfmake(pdfTable12.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 13){
      // @ts-ignore
      const pdfTable13 = this.pdfTable13.nativeElement;

      var html = htmlToPdfmake(pdfTable13.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 14){
      // @ts-ignore
      const pdfTable14 = this.pdfTable14.nativeElement;

      var html = htmlToPdfmake(pdfTable14.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 15){
      // @ts-ignore
      const pdfTable15 = this.pdfTable15.nativeElement;

      var html = htmlToPdfmake(pdfTable15.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 16){
      // @ts-ignore
      const pdfTable16 = this.pdfTable16.nativeElement;

      var html = htmlToPdfmake(pdfTable16.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).open();
    }else if(id == 17){
      // @ts-ignore
      const pdfTable17 = this.pdfTable17.nativeElement;

      var html = htmlToPdfmake(pdfTable17.innerHTML);

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
    this.apiRest2.getAllCompeticion().subscribe((data: any) => {
      this.competiciones = data.data;
    });
  }
  Reporte1(){
    this.showRepo1 = true;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte1(this.id_team,this.players).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte2(){
    this.showRepo1 = false;
    this.showRepo2 = true;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte2(this.age,this.players).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte3(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = true;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte3(this.age,this.players).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte4(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = true;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte4(this.idcompetition).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte5(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = true;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte5(this.idCountry).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte6(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = true;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte6(this.age).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte7(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = true;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte7(this.idCountry).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte8(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = true;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte8(this.capacity).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte9(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = true;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte9(this.id_team).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte11(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = true;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte11(this.goals).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte12(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = true;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte12(1,this.idcompetition).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte13(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = true;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte13(1,this.year,2).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte14(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = true;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte14(this.id_team).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte15(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = true;
    this.showRepo16 = false;
    this.showRepo17 = false;
    this.apiRest.getReporte15(this.year).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  Reporte16(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = true;
    this.showRepo17 = false;
    this.apiRest.getReporte16(this.id_team,this.idTeam2).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }Reporte17(){
    this.showRepo1 = false;
    this.showRepo2 = false;
    this.showRepo3 = false;
    this.showRepo4 = false;
    this.showRepo5 = false;
    this.showRepo6 = false;
    this.showRepo7 = false;
    this.showRepo8 = false;
    this.showRepo9 = false;
    this.showRepo11 = false;
    this.showRepo12 = false;
    this.showRepo13 = false;
    this.showRepo14 = false;
    this.showRepo15 = false;
    this.showRepo16 = false;
    this.showRepo17 = true;
    this.apiRest.getReporte17(this.id_team).subscribe((data: any) => {
      this.data = data.data;
      console.log(this.data);
    });
  }

}
