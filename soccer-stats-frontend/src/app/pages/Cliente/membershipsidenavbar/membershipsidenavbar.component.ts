import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ServiceService } from 'src/app/services/service.service';
import { async } from 'rxjs';
@Component({
  selector: 'app-membershipsidenavbar',
  templateUrl: './membershipsidenavbar.component.html',
  styleUrls: ['./membershipsidenavbar.component.css']
})
export class MembershipsidenavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // ESTE DEBE VERIFICAR SI TIENE MEMBRESIA
  fillerNav = [
    { name: 'Perfil', route: 'profile', icon: '1' },
    { name: 'Noticias', route: 'newsmember', icon: '2' },
    { name: 'Reporte', route: 'reporte', icon: '3' },

    /*device_hub*/

  ];
  file: File | undefined;
  photoSelected: string | ArrayBuffer | any;
  Username: string | undefined;

  
  ngOnInit(): void {
    console.log(this.service.getUser())
    this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
      this.service.getClient(res.data).subscribe(async (res: any) => {
        this.photoSelected = res.data.photo
        console.log(this.photoSelected)

        

        this.Username = "@" + res.data.last_name + res.data.first_name
      })
    })
  }

  private _mobileQueryListener: () => void;

  constructor(private service: ServiceService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );

  salir() {
    window.localStorage.clear();
    this.route.navigate(['/']);
  }

  nomembresy() {
    Swal.fire({
      title: '¿Quieres dar de baja tu membresía?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.getId(this.service.getUser() + "").subscribe((res: any) => {
          this.service.BajaMembership(res.data).subscribe((res: any) => {
            Swal.fire(res.msg, '', 'success')
            this.route.navigate(['/pages/client/']);
          })
        })

      } else if (result.isDenied) {
        Swal.fire('Adquiere una membresía para gozar de nuestros beneficios', '', 'info')
      }
    })

  }
}
