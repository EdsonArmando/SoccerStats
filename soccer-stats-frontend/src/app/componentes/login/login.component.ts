import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = ""
  hide = true;
  contra = ""
  ipESB = ""
  constructor(private router: Router, private Service: ServiceService) { }

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

  async fogotpassword() {
    const { value: email } = await Swal.fire({
      title: 'Recuperar contraseña',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'example@example.com'
    })

    if (email) {
      this.Service.saveIP(this.ipESB);
      this.Service.forgotEmail(email)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso de email exitoso, ingresa a tu correo electrónico y verifica el token',
        showConfirmButton: false,
        timer: 1500
      })

    }
  }

  login() {
    localStorage.clear()
    this.Service.saveIP(this.ipESB);
    if (this.user != "" && this.contra != "") {
      try {
        this.Service.Login(this.user, this.contra).subscribe((res: any) => {
         console.log(res)
          if (res.data.id_status == 1 && res.data.id_rol === 3) {
            console.log("CUSTOMER")
            if (res.msj != "Error de autenticación." || res.msg != "Error de autenticación.") {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Credenciales correctas',
                showConfirmButton: false,
                timer: 1500
              })
              this.Service.saveUser(this.user, res.data.token, res.data.id_user, res.data.id_rol)
              this.Service.getClient(res.data.id_user).subscribe((res: any) => {
                console.log(res)
                if (res.data.has_membership) {
                  this.router.navigate(['/pages/client/membership/']);
                } else {
                  this.router.navigate(['/pages/client/']);
                }
              })
            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Credenciales incorrectas',
                showConfirmButton: false,
                timer: 1500
              })
            }
          } else if (res.data.id_status == 1 && res.data.id_rol === 1) {
            console.log("ADMINISTRADOR")
            if (res.msg != "Error de autenticación."|| res.msj != "Error de autenticación.") {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Credenciales correctas',
                showConfirmButton: false,
                timer: 1500
              })
              this.Service.saveUser(this.user, res.data.token, res.data.id_user, res.data.id_rol)
              this.router.navigate(['/pages/admin']);

            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Credenciales incorrectas',
                showConfirmButton: false,
                timer: 1500
              })
            }
          } else if (res.data.id_status == 1 && res.data.id_rol === 2) {
            console.log("EQUIPO")
            if (res.msj != "Error de autenticación." || res.msg != "Error de autenticación.") {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Credenciales correctas',
                showConfirmButton: false,
                timer: 1500
              })
              this.Service.saveUser(this.user, res.data.token, res.data.id_user, res.data.id_rol)
              this.router.navigate(['/pages/empleado']);

            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Credenciales incorrectas',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Cuenta no verificada',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/error']);
          }
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.error.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/error']);
        })
      } catch (e) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Credenciales incorrectas',
          showConfirmButton: false,
          timer: 1500
        })
      }
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
