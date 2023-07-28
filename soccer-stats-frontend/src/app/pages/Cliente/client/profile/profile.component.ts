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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  breakpoint: number | undefined;
  id_client = 0;
  constructor(public router: Router, private service: ServiceService) { }
  country: Pais[] = [];
  ngOnInit(): void {
    this.service.getCountries().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.country.push(<Pais>element)
      });
    })
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.id_client = res.data
      this.service.getClient(res.data).subscribe((res: any) => {
        
        let cliente: any[] = res.data
        this.nombre = cliente[0].name
        this.apellido = cliente[0].lastname
        this.phone = cliente[0].phone+''
        this.correo = cliente[0].email
        this.nacimiento = cliente[0].birth_date
        this.selected2 = cliente[0].gender
        this.selected3 = cliente[0].address
        this.photoSelected = cliente[0].photo
        this.isChecked = cliente[0].isMember
        /**address: "Bahamas"
age: 0
birth_date: "2022-05-12T00:00:00.000Z"
country: "BAHAMAS"
email: "fifij89407@abincol.com"
gender: "F"
id_country: 16
lastname: "Galvez"
name: "Lilian Vanessa"
phone: 53954952
photo: "https://sag12.s3.amazonaws.com/SA/22.jpg"
 */
      })
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
    this.file = <File>event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.photoSelected = reader.result;
      console.log(reader.result);
    };

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
        var re = /https/gi;
        if (this.photoSelected.toString().search(re) != -1) {
          console.log(this.photoSelected)
          this.user.photo = this.photoSelected
        } else {
          console.log("si entra acá")
          this.user.photo = this.photoSelected.toString().split(",")[1]
        }

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
        this.user.birth_date = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate()
        console.log(this.user)
        this.service.UpdateClient(this.user, this.id_client.toString()).subscribe((res: any) => {
          if (res) {

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario modificado con éxito',
              showConfirmButton: false,
              timer: 1500
            })
            if (this.user.isMember) {
              this.router.navigate(['/pages/client/membership/']);
            } else {
              this.router.navigate(['/pages/client/']);
            }

          }
        })
      }

    }

  }

  DeleteCount() {
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.id_client = res.data
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.DeleteCount(this.id_client.toString()).subscribe((res:any) => {
            Swal.fire(
              'Deleted!' + (res.data.msg || res.data.msj),
              'Your profile has been deleted.',
              'success'
            )
          })
          window.localStorage.clear();
          this.router.navigate(['/']);
        }
      })
    })
  }
  routInicio() {
    this.router.navigate(['']);
  }

  buscarid(pais: string) {
    this.country.forEach((element: any) => {
      if (pais === element.nicename) {
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

interface Users {
  birth_date: string
  createdAt: string
  email: string
  first_name: string
  gender: string
  id: number
  idCountry: number
  isMember: false
  last_name: string
  location: string
  password: string
  phone: number
  photo: string
  status: number
  type: any
  updatedAt: string
}