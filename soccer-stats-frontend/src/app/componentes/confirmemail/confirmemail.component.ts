import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.css']
})
export class ConfirmemailComponent implements OnInit {

  constructor(private active: ActivatedRoute, private router: Router, private Servicio: ServiceService) { }
  ipESB=""
  ngOnInit(): void {
    
      
  }
  routes(){
    this.Servicio.saveIP(this.ipESB)
    const parm = this.active.snapshot.params;
    var id = parm.id;
    this.Servicio.verifyEmail(id).subscribe((res) => { 
        
        console.log(res, "COMENTARIOOOO")
        const Toast =Swal.mixin({
          toast: true,
          position: 'top-start',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Tu cuenta ha sido confirmada, regresa al Login,\n Haz click en el botón verde'
        })
      });
  }
  routlogin() {
    this.router.navigate(['/login']);
  }
  routregister() {
    this.router.navigate(['/register']);
  }
  routhome() {
    this.router.navigate(['/']);
  }

  onResize(event: any) {
    (window.innerWidth <= 450) ? 1 : 3;
  }
}