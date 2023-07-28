import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipos } from 'src/app/models/Equipos';
import { Noticias } from 'src/app/models/Noticias';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-membernews',
  templateUrl: './membernews.component.html',
  styleUrls: ['./membernews.component.css']
})
export class MembernewsComponent implements OnInit {

  constructor(private service: ServiceService) { }
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'date', 'country', 'accion'];
  ELEMENT_DATA: Equipos[] = [];

  dataSource1: any;
  displayedColumns1: string[] = ['posicion', 'nombre', 'date', 'country', 'photo', 'accion'];
  ELEMENT_DATA1: Equipos[] = [];

  dataSource2: any;
  displayedColumns2: string[] = ['position', 'title', 'description', 'date', 'photo'];
  ELEMENT_DATA2: Noticias[] = [];
  ELEMENT_DATA2_F: Noticias[] = [];
  ngOnInit(): void {
    //***********equipos para favoritos *********** */
    let position = 0;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.Equipos(res.data).subscribe((res: any) => {
        res.data.forEach((element: any) => {
          position++
          element.position = position
          let fechamodify = new Date(element.foundation_date);
          element.foundation_date = fechamodify.getDate() + "/" + (fechamodify.getMonth() + 1) + "/" + fechamodify.getFullYear()
          this.ELEMENT_DATA.push(element)
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      })
    })
    /************ Equipos favoritos **************** */
    let position1 = 0;
    this.dataSource1 = new MatTableDataSource(this.ELEMENT_DATA1);
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.EquiposFav(res.data).subscribe((res: any) => {
        if (res.data.length != 0) {
          var valor = <Equipos[]>res.data
          res.data.forEach((element: any) => {
            position1++
            element.position = position1
            let fechamodify = new Date(element.foundation_date);
            element.foundation_date = fechamodify.getDate() + "/" + (fechamodify.getMonth() + 1) + "/" + fechamodify.getFullYear()
            this.ELEMENT_DATA1.push(element)
          });
          this.ELEMENT_DATA1 = valor
          this.ELEMENT_DATA1 = this.ELEMENT_DATA1.filter((valor: Equipos, index: number) =>
            this.ELEMENT_DATA1.findIndex((data: any) => data.name === valor.name) === index
          )
          this.dataSource1 = new MatTableDataSource(this.ELEMENT_DATA1);
        }
      })
    })
    console.log(this.ELEMENT_DATA1)
    this.allNews()

  }
  filtrarequipos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  filtrarfavoritos(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filtro.trim().toLowerCase();
  }
  filtrarNoticias(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filtro.trim().toLowerCase();
  }

  allNews() {
    this.ELEMENT_DATA2 = []
    let position2 = 0;
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.getAllNotices(res.data).subscribe((res: any) => {

        if (res.data.length != 0) {
          var valor = <Noticias[]>res.data
          res.data.forEach((element: any) => {
            position2++

            element.position = position2
            let fechamodify = new Date(element.date);
            element.date = fechamodify.getDate() + "/" + (fechamodify.getMonth() + 1) + "/" + fechamodify.getFullYear()
            this.ELEMENT_DATA2.push(element)
          });
          this.ELEMENT_DATA2 = valor
          this.ELEMENT_DATA2 = this.ELEMENT_DATA2.filter((valor: Noticias, index: number) =>
            this.ELEMENT_DATA2.findIndex((data: any) => data.title === valor.title) === index
          )
          this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
        }
      })
    })
  }

  allFavorites() {
    this.ELEMENT_DATA2_F = this.ELEMENT_DATA2
    this.ELEMENT_DATA2 = []
    let position2 = 0;
    var valor = <Noticias[]>this.ELEMENT_DATA2
    this.ELEMENT_DATA1.forEach(elements => {
      this.ELEMENT_DATA2_F.forEach(element => {
        if (elements.id == element.idTeam) {
          this.ELEMENT_DATA2.push(element)
        }
      });
    });
    this.ELEMENT_DATA2 = valor
    this.ELEMENT_DATA2 = this.ELEMENT_DATA2.filter((valor: Noticias, index: number) =>
      this.ELEMENT_DATA2.findIndex((data: any) => data.title === valor.title) === index
    )
    this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
  }
  addFavorites(id: string) {
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.Follow(res.data, id).subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.msg ||res.msj,
          showConfirmButton: false,
          timer: 2000
        })
      })
    })
  }

}
