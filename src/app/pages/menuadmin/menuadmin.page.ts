import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

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

  public idusuario="";
  public nombre="";
  public apellidopaterno="";
  public apellidomaterno="";
  public domicilio="";
  public telefono="";
  public rfc="";
  public usuario="";
  public contraseña="";
  public tipousuario="";
  public fechacreacion="";
  public url="";
  itemuser:any;

  constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController, 
    private alertCtrl: AlertController) { 
    this.route.queryParams.subscribe(params => {
      this.itemuser = this.router.getCurrentNavigation().extras.state.usuario;
      this.idusuario = this.itemuser.idusuario;
      this.nombre = this.itemuser.nombre;
      this.apellidopaterno = this.itemuser.apellidopaterno,
      this.apellidomaterno = this.itemuser.apellidomaterno;
      this.domicilio = this.itemuser.domicilio;
      this.telefono = this.itemuser.telefono;
      this.rfc = this.itemuser.rfc;
      this.usuario = this.itemuser.usuario;
      this.contraseña = this.itemuser.contraseña;
      this.tipousuario = this.itemuser.tipousuario;
      this.fechacreacion = this.itemuser.fechacreacion; 
      this.url = this.itemuser.url;
    });
  }

  ngOnInit() {
  }

  sendpage(page: any){
    this.router.navigate([page.name]);
  }

  async cerrarsesion(){
    const alert = await this.alertCtrl.create({
      header: "Cerrando Sesión",
      subHeader: "¿Seguro que deseas salir?",
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.navigateRoot('home');
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            //console.log('cancelo');
          }
        }        
      ]
    });
    await alert.present();
  }

}
