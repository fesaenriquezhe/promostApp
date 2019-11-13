import { Component, OnInit } from '@angular/core';
import { MenuadminPage } from '../menuadmin/menuadmin.page';
import { Router, NavigationExtras } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  idusuario2=""
  idusuario="";
  nombre="";
  apellidopaterno="";
  apellidomaterno="";
  domicilio="";
  telefono="";
  rfc="";
  usuario="";
  contraseña="";
  tipousuario="";
  fechacreacion="";
  url="";
  clic=false;
  itemuserup:any;

  constructor(private menuadmin: MenuadminPage, private router: Router, private alertCtrl: AlertController, public navCtrl: NavController,
    private loadingController: LoadingController,
    private users: UsersService) { 
   }

  ngOnInit() {
    this.idusuario = this.menuadmin.idusuario;
      this.nombre = this.menuadmin.nombre;
      this.apellidopaterno = this.menuadmin.apellidopaterno,
      this.apellidomaterno = this.menuadmin.apellidomaterno;
      this.domicilio = this.menuadmin.domicilio;
      this.telefono = this.menuadmin.telefono;
      this.rfc = this.menuadmin.rfc;
      this.usuario = this.menuadmin.usuario;
      this.contraseña = this.menuadmin.contraseña;
      this.tipousuario = this.menuadmin.tipousuario;
      this.fechacreacion = this.menuadmin.fechacreacion;
      this.url = this.menuadmin.url;
      
  }

  mostraropciones(){
    //document.getElementById("listseguridad").style.display = "block";
    if(this.clic==false){
      //document.getElementById("caja").style.height = "100px";
      document.getElementById("ocultar").style.display = "block"; 
      this.clic=true;
    }else{
      //document.getElementById("caja").style.height = "0px"; 
      document.getElementById("ocultar").style.display = "none"; 
      this.clic=false;
    }
  }

  actualizar(){
    this.itemuserup = {
      idusuario: this.idusuario,
      nombre: this.nombre,
      apellidopaterno: this.apellidopaterno,
      apellidomaterno: this.apellidomaterno,
      domicilio: this.domicilio,
      telefono: this.telefono,
      rfc: this.rfc,
      usuario: this.usuario,
      contraseña: this.contraseña,
      tipousuario: this.tipousuario,
      fechacreacion: this.fechacreacion,
      url:this.url
    }

    let navigationExtras: NavigationExtras = {
      state: {
        usuarioup: this.itemuserup
      }
    }

    this.router.navigate(['/menuadmin/updateuser'],navigationExtras);
  }

  async eliminar(){

    let alert = await this.alertCtrl.create({
      header: "¿Seguro de eliminar?",
      message: "Se borrara la cuenta y todos los datos del usuario "+this.usuario,
      buttons: [
        {
          text: 'Aceptar',
          handler: async () => {
            this.users.delUser(this.url,this.idusuario);
            const loading = await this.loadingController.create({
              message: 'Eliminando usuario..'
            });
            await loading.present();
            loading.dismiss();
            this.delconfirmacion();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('cancelo');
          }
        }        
      ]
    });
    await alert.present();
  }

  async delconfirmacion(){
    if(this.users.msjdele == "Successfull"){
      let alert = await this.alertCtrl.create({
        header: "¡Operación Exitosa!",
        subHeader: "Usuario "+this.usuario+" eliminado correctamente",
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['home']);
            }
          }
        ]
      });
      await alert.present();
    }else{
      let alert = await this.alertCtrl.create({
        header: "¡Operación Fallida!",
        subHeader: "Hubo un problema al eliminar el usuario "+this.usuario,
        buttons: [
          {
            text: 'OK',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
