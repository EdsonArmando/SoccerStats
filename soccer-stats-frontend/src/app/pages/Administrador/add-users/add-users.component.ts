import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioCreado } from 'src/app/models/Usuarios';
import { ReportesService } from 'src/app/services/AdminReportes/reportes.service';
import { ServiceService } from 'src/app/services/service.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  breakpoint: number | undefined;
  constructor(public router: Router, private service: ServiceService, private serviceadmin: ReportesService) { }
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
  Rol: Rol[] = [
    { value: '2', viewValue: 'Empleado' },
    { value: '3', viewValue: 'Administrador' },
  ];
  selectrol: number | undefined;
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


  async getBase64ImageFromUrl(imageUrl: any) {
    var res = await fetch(imageUrl,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH',

          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        }
      });

    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
      console.log(this.photoSelected)
    })
  }

  routlogin() {
    this.router.navigate(['/login']);
  }
  routregister() {
    this.router.navigate(['/register']);
  }





  Register() {

    this.photoSelected = 'data:image/png;base64,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'
    if (this.nombre == "" || this.apellido == "" || this.phone == ""
      || this.nacimiento == "" || this.selected2 == "" || this.selected2 == ""
      || this.correo == "") {

      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: "Llene todos los campos",
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
      this.user.rol = this.selectrol
      this.user.birth_date = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate()
      console.log(this.user)
      this.serviceadmin.Registro(this.user).subscribe((res: any) => {
        if (res) {

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario ingresado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
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

interface Rol {
  value: string;
  viewValue: string;
}