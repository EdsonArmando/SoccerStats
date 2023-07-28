import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminsidenavbar',
  templateUrl: './adminsidenavbar.component.html',
  styleUrls: ['./adminsidenavbar.component.css']
})
export class AdminsidenavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // ESTE DEBE VERIFICAR SI TIENE MEMBRESIA
  fillerNav = [
    { name: 'Reportes', route: 'reportes', icon: '1' },
    { name: 'Partidos', route: 'partidos', icon: '3' },
    { name: 'Agregar Usuarios', route: 'adduser', icon: '4' },
    /*device_hub*/

  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router) {
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

  salir(){
    window.localStorage.clear();
    this.route.navigate(['/']);
  }
}


