import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Partidos } from 'src/app/models/Partidos';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-nonmembernews',
  templateUrl: './nonmembernews.component.html',
  styleUrls: ['./nonmembernews.component.css']
})
export class NonmembernewsComponent implements OnInit {

  constructor(private service: ServiceService) { }
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'date', 'attendees', "local", "visiting", "resultado"];
  ELEMENT_DATA: Partidos[] = [];
  ngOnInit(): void {
    let position = 0;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.service.Partidos().subscribe((res:any)=>{
      res.data.forEach((element:any) => {
        position++
        element.position=position
        let fechamodify= new Date(element.game_date);
        element.game_date= fechamodify.getDate()+"/"+(fechamodify.getMonth()+1)+"/"+ fechamodify.getFullYear()
        this.ELEMENT_DATA.push(element)
      });
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

