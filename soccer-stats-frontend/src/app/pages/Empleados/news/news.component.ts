import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NoticeService } from 'src/app/services/EmpleadosService/notice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  allNew: Noticias[] | undefined;
  constructor(
    private apiRest: NoticeService,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    //setInterval(() => {
      this.apiRest.getAllNotice().subscribe((data: any) => {
        this.allNew = data.data;
      });
    //}, 5000);
    this.apiRest.getAllNotice().subscribe((data: any) => {
      this.allNew = data.data;
    });
  }
}
export interface Noticias{
  title: string,
  description : string,
  date: Date
}
