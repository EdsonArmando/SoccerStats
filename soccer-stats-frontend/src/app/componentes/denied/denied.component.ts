import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.css']
}) // Comentario para activar el changeset
export class DeniedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routlogin(){
    console.log("holaa")
    this.router.navigate(['/login']);
  }
  routregister(){
    this.router.navigate(['/register']);
  }
  onResize(event: any) {
     (window.innerWidth <= 450) ? 1 : 3;
  }
}
