import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      name: 'menuadmin/inicioadmin',
      url: '/menuadmin/inicioadmin',
      icon: 'home'
    },
    {
      title: 'Datos de la empresa',
      name: 'menuadmin/miempresa',
      url: '/menuadmin/miempresa',
      icon: 'analytics'
    },
    {
      title: 'Mis Promociones',
      name: 'menuadmin/mispromociones',
      url: '/menuadmin/mispromociones',
      icon: 'paper'
    },
    {
      title: 'Mi Cuenta',
      name: 'menuadmin/micuenta',
      url: '/menuadmin/micuenta',
      icon: 'contact'
    },
    {
      title: 'Acerca de',
      name: 'menuadmin/acercade',
      url: '/menuadmin/acercade',
      icon: 'help-circle-outline'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendpage(page: any){
    this.router.navigate([page.name]);
  }

}
