import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-sidenavbarclient',
  templateUrl: './sidenavbarclient.component.html',
  styleUrls: ['./sidenavbarclient.component.css']
})
export class SidenavbarclientComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // ESTE DEBE VERIFICAR SI TIENE MEMBRESIA
  fillerNav = [
    { name: 'Perfil', route: 'profile', icon: '1' },
    { name: 'Noticias', route: 'newsgeneral', icon: '2' },
    { name: 'Prediccion', route: 'prediccion', icon: '3' }
    /*device_hub*/
  ];
  intervalID = window.setInterval(this.miFuncion, 90000);

  miFuncion() {
    const Toast =Swal.mixin({
      toast: true,
      position: 'center-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'info',
      title: 'Accede a nuestra membresía por solo Q15.00'
    })
  }
  private _mobileQueryListener: () => void;

  photoSelected: string | ArrayBuffer | any;
  Username:string | undefined;
  ngOnInit(): void {
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.getClient(res.data).subscribe((res: any) => {
        this.photoSelected = res.data[0].photo
        this.Username= "@"+res.data.last_name+res.data.first_name
      })
    })
  }

  constructor(private service:ServiceService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    console.log("holaaaaaaaa")
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  membresy(){
    Swal.fire({
      title: '¿Quieres adquirir una membresía?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
          this.service.Membership(res.data).subscribe((res: any) => {
            Swal.fire(res.msj, '', 'success')
            this.route.navigate(['/pages/client/membership/']);
          })
        })

      } else if (result.isDenied) {
        Swal.fire('Adquiere una membresía para gozar de nuestros beneficios', '', 'info')
      }
    })
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );

  salir(){
    window.localStorage.clear();
    this.route.navigate(['/']);
  }
}

