import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipos } from 'src/app/models/Equipos';
import { CiudadesService } from 'src/app/services/CiudadesService/ciudades.service';
import { ReporteClientService } from 'src/app/services/ClienteReporte/reporte-client.service';
import { EquiposService } from 'src/app/services/EmpleadosService/equipos.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private serviceteam: EquiposService, private serviceclient: ReporteClientService, private servicecity: CiudadesService) { }

  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA: Equipos[] = [];

  dataSource2: any;
  displayedColumns2: string[] = ['position', 'name', 'lastname','age', 'team' , 'nationality', 'photo'];
  ELEMENT_DATA2: EquiposJugadores[] = [];

  dataSource3: any;
  displayedColumns3: string[] = ['position', 'name', 'lastname','age', 'team' , 'nationality', 'photo'];
  ELEMENT_DATA3: Equipos[] = [];

  dataSource4: any;
  displayedColumns4: string[] = ['position', 'team', 'photo'];
  ELEMENT_DATA4: Equipos[] = [];

  dataSource5: any;
  displayedColumns5: string[] =['position', 'team', 'photo'];
  ELEMENT_DATA5: Equipos[] = [];

  dataSource6: any;
  displayedColumns6: string[] =['id_team','team', 'foundation_date', 'country', 'photo'];
  ELEMENT_DATA6: Equipos[] = [];

  dataSource7: any;
  displayedColumns7: string[] =['id_stadium','stadium', 'photo'];
  ELEMENT_DATA7: Equipos[] = [];

  dataSource8: any;
  displayedColumns8: string[] = ['id_stadium','stadium', 'country', 'capacity', 'photo'];
  ELEMENT_DATA8: Equipos[] = [];

  dataSource9: any;
  displayedColumns9: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA9: Equipos[] = [];

  dataSource10: any;
  displayedColumns10: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA10: Equipos[] = [];

  dataSource11: any;
  displayedColumns11: string[] = ['attendees', 'competition',
  'game_date', 'goles',
  'photo_local', 'photo_visiting', 'result_local', 
  'result_visiting', 'stadium', 'status',
  'team_local', 'team_visiting'];
  ELEMENT_DATA11: Object[] = [];

  dataSource12: any;
  displayedColumns12: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA12: Equipos[] = [];

  dataSource13: any;
  displayedColumns13: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA13: Equipos[] = [];

  dataSource14: any;
  displayedColumns14: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA14: Equipos[] = [];

  dataSource15: any;
  displayedColumns15: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA15: Equipos[] = [];

  dataSource16: any;
  displayedColumns16: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA16: Equipos[] = [];

  dataSource17: any;
  displayedColumns17: string[] = ['position', 'name', 'lastname', 'nationality', 'photo'];
  ELEMENT_DATA17: Equipos[] = [];
  /**
   * VARIABLES
   */
  equipos: any;
  paises: any;
  id_team: any;
  capacity: any;
  goals: any;
  competiciones: any;
  year: any;
  idTeam2: any;
  players: any;
  age: any;
  idCountry: any;
  idcompetition: any;
  data: any;
  breakpoint: any;
  ngOnInit(): void {
    this.serviceteam.getAllTeams().subscribe((data: any) => {
      this.equipos = data.data;
    });
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    this.serviceteam.getAllCompeticion().subscribe((data: any) => {
      this.competiciones = data.data;
    });
    this.servicecity.getAllCountries().subscribe((data: any) => {
      this.paises = data.data;
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  Report1() {
    this.serviceclient.getReporte1(this.id_team, this.players).subscribe((res) => {
      if (res.data.length != 0) {
        this.ELEMENT_DATA = res.data
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    })
  }

  Report2() {
    this.serviceclient.getReporte2(this.age, this.players).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA2 = res.data
        this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
      }
    })
  }

  Report3() {
    this.serviceclient.getReporte3(this.age, this.players).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA3 = res.data
        this.dataSource3 = new MatTableDataSource(this.ELEMENT_DATA3);
      }
    })
  }

  Report4() {
    this.serviceclient.getReporte4(this.idcompetition).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA4 = res.data
        this.dataSource4 = new MatTableDataSource(this.ELEMENT_DATA4);
      }
    })
  }

  Report5() {
    this.serviceclient.getReporte5(this.idCountry).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA5 = res.data
        this.dataSource5 = new MatTableDataSource(this.ELEMENT_DATA5);
      }
    })
  }

  Report6() {
    this.serviceclient.getReporte6(this.age).subscribe((res) => {
      if (res.data.length != 0) {
        this.ELEMENT_DATA6 = res.data
        this.dataSource6 = new MatTableDataSource(this.ELEMENT_DATA6);
      }
    })
  }

  Report7() {
    this.serviceclient.getReporte7(this.idCountry).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA7 = res.data
        this.dataSource7 = new MatTableDataSource(this.ELEMENT_DATA7);
      }
    })
  }

  Report8() {
    this.serviceclient.getReporte8(this.capacity).subscribe((res) => {
      if (res.data.length != 0) {
        this.ELEMENT_DATA8 = res.data
        this.dataSource8 = new MatTableDataSource(this.ELEMENT_DATA8);
      }
    })
  }

  Report9() {
    this.serviceclient.getReporte9(this.id_team).subscribe((res) => {
      console.log(res)
      if (res.data.length != 0) {
        this.ELEMENT_DATA9 = res.data
        this.dataSource9 = new MatTableDataSource(this.ELEMENT_DATA9);
      }
    })
  }

  Report11() {
    this.serviceclient.getReporte11(this.goals).subscribe((res) => {
      if (res.data.length != 0) {
        this.ELEMENT_DATA11 = res.data
        this.ELEMENT_DATA11.forEach((element:any) => {
          let date= new Date(element.game_date.toString())
          element.game_date= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        });
        this.dataSource11 = new MatTableDataSource(this.ELEMENT_DATA11);
      }
    })
  }

}

export interface EquiposJugadores {
  age: number
  id: number
  lastname: string
  name: string
  nationality: string
  photo: string
  position: string
  team: string
}