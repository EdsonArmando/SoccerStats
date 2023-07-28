import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioCreado } from 'src/app/models/Usuarios';
import { ServiceService } from 'src/app/services/service.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  breakpoint: number | undefined;
  constructor(public router: Router, private service: ServiceService) { }
  country: Pais[] = [];
  ngOnInit(): void {
    this.service.getCountries().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.country.push(<Pais>element)
      });
    })

  }

  onResize(event: any) {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 3;
  }

  ///////////////////////////////////////RESTRICCIONES PARA NO DEJAR CAMPOS VACIOS/////////////////
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  usernames = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageother() {
    if (this.lastname.hasError('required')) {
      return 'Debes ingresar un valor';
    } else if (this.firstname.hasError('required')) {
      return 'Debes ingresar un valor';
    } else if (this.usernames.hasError('required')) {
      return 'Debes ingresar un valor';
    } else {
      return 'Campos obligatorios Debes ingresar un valor';
    }
  }
  /////////////////////////////////////////////VARIABLES PARA INGRESO DE DATOS////////////////////////
  uploadedFiles: Array<File> | undefined;
  selected2 = "";
  selected3 = "";
  nombre: string = "";
  apellido: string = "";
  username: string = "";
  phone: string = ""
  pais: string = "";
  fecha: Date | undefined
  correo: string = "";
  password: string = "";
  urlfoto: string = "assets/images/sinFoto.jpg";
  model: string = ""
  exampleHeader: string = ""
  selectedviewValue: string | undefined;
  hide = true;
  hide1 = true;
  contra: string = "";
  portada: any;
  isChecked = false;
  codu: string = "";
  photoSelected: string | ArrayBuffer | any;
  file: File | undefined;
  panelOpenState = false;
  panelOpenState1 = true;
  active = "off"
  public isOpen: boolean = false;
  msgError: string = '';
  isVisible: boolean = false;
  gender: Genero[] = [
    { value: 'F', viewValue: 'Femenino' },
    { value: 'M', viewValue: 'Masculino' },
    { value: 'U', viewValue: 'Otro' },
  ];
  user: usuarioCreado = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    phone: '',
    gender: '',
    location: '',
    isMember: false,
    idCountry: 0,
    password: ''
  };

  nacimiento: string = "";

  @ViewChild("video")
  public video!: ElementRef;

  @ViewChild("canvas")
  public canvas!: ElementRef;

  public captures: Array<any> | undefined;


  onFileChanged(event: any) {
    const file = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

      let extension = this.file.name.split(".")
      console.log(this.photoSelected)

    }
  }

  routlogin() {
    this.router.navigate(['/login']);
  }
  routregister() {
    this.router.navigate(['/register']);
  }





  Register() {

    if (this.nombre == "" || this.apellido == "" || this.phone == ""
      || this.nacimiento == "" || this.selected2 == "" || this.selected2 == ""
      || this.correo == "" || this.contra == "" || this.password == "" || this.photoSelected == undefined) {
      if (this.photoSelected == undefined) {

        Swal.fire({
          position: 'center',
          icon: 'info',
          title: "Seleccione una fotografia, y llene todos los campos",
          showConfirmButton: false,
          timer: 2000
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: "Llene todos los campos",
          showConfirmButton: false,
          timer: 2000
        })
      }
    } else {
      if (this.contra != this.password) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: "Contraseñas no coinciden",
          showConfirmButton: false,
          timer: 2000
        })
      } else {
        this.user.photo = this.photoSelected.toString().split(",")[1]
        this.user.first_name = this.nombre
        this.user.last_name = this.apellido
        this.user.email = this.correo
        this.user.password = this.password
        this.user.gender = this.selected2
        this.user.location = this.selected3
        this.buscarid(this.selected3)
        this.user.isMember = this.isChecked
        this.user.phone = this.phone
        let fecha = new Date(this.nacimiento)
        this.user.rol=1
        this.user.birth_date = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate()
        console.log(this.user)
        this.service.Registro(this.user).subscribe((res: any) => {
          if (res) {

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario ingresado con éxito',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(["/login"]);
          } else {
            this.msgError = 'Ya existe ese usuario, intente con otro'
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: this.msgError,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }

    }

  }

  redirigir() {
    this.router.navigate(["/login"]);
  }
  routInicio() {
    this.router.navigate(['']);
  }

  buscarid(pais: string) {
    this.country.forEach((element: any) => {
      if (pais === element.nicename) {
        console.log(element.id)
        this.user.idCountry = element.id
        return element.id
      }
    });
  }
}
interface Genero {
  value: string;
  viewValue: string;
}

interface Pais {
  id: number,
  nicename: string
}
