import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // ESTE DEBE VERIFICAR SI TIENE MEMBRESIA
  fillerNav = [
    { name: 'Perfil', route: 'profile', icon: '1' },
    { name: 'Noticias', route: 'news', icon: '2' },
    { name: 'Inicio', route: 'carusel', icon: '1' },
    { name: 'Equipos', route: 'equipo', icon: '1' },
    { name: 'Estadios', route: 'estadios', icon: '2' },
    { name: 'Torneo', route: 'competiciones', icon: '2' },
    { name: 'Jugadores', route: 'jugadores', icon: '1' },
    { name: 'Tecnicos', route: 'tecnicos', icon: '1' },
    { name: 'transfer', route: 'transfer', icon: '2' },
    { name: 'Bitacora', route: 'logsAccion', icon: '3' },
    { name: 'Incidencia', route: 'listIncidencias', icon: '3' },

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
