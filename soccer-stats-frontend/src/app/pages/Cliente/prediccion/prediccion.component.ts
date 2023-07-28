import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../../services/EmpleadosService/equipos.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {

  constructor(
    private service:EquiposService
  ) { }

  local = ""
  visitante = ""
  resultado = ""
  compId = ""
  extend = ""
  equipos:any
  comps:any

  ngOnInit(): void {
    this.service.getAllTeams().subscribe((data:any) => {
      this.equipos = data.data;
    });
    this.service.getAllCompeticion().subscribe((data:any) => {
      this.comps = data.data;
    });
  }

  predecirResultado(){
    if (this.local == "" || this.visitante == "" || this.compId == "") {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Selecciona todos los campos",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      this.service.prediccion(this.visitante, this.local, this.compId).subscribe((res:any) => {
        if (res) {
          this.resultado = (res.data.lenght > 0) ?
          res.msg :
          `${res.msg}<br>El equipo visitante anotará aprox: ${res.data.estimateGoalsVisitors} y el equipo local anotará aprox: ${res.data.estimateGoalsHome}`;

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: this.resultado,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }

}
