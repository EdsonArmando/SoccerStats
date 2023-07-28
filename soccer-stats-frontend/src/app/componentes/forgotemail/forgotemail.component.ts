import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.css']
})
export class ForgotemailComponent implements OnInit {
  user = ""
  hide= true;
  hide1=true;
  contra = ""
  token=""
  email=""
  constructor(private route: ActivatedRoute, private router: Router, private Service: ServiceService) { }
  orderby: string | undefined;
  ngOnInit(): void {
  }

  routlogin() {
    this.router.navigate(['/login']);
  }
  routInicio() {
    this.router.navigate(['']);
  }
  routregister() {
    this.router.navigate(['/register']);
  }
  onResize(event: any) {
    (window.innerWidth <= 450) ? 1 : 3;
  }

  ipESB=""
  change(){
    this.Service.saveIP(this.ipESB);
    if (this.user != "" && this.contra != "" && this.token!="") {
      this.Service.getId(this.user).subscribe((res:any)=>{
        if(res.data!=null){
          this.Service.changePassword(this.contra,this.token,this.user, this.route.snapshot.paramMap.get('token')+"")
          .subscribe((res:any)=>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: res.msg,
              showConfirmButton: false,
              timer: 2000
            })
          })
        }else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Email no validado',
            showConfirmButton: false,
            timer: 2000
          })
        }
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Llena todos los campos para ingresar',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
