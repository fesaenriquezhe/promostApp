import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.page.html',
  styleUrls: ['./updateuser.page.scss'],
})
export class UpdateuserPage implements OnInit {

  idusuario="";
  nombre="";
  apellidopaterno="";
  apellidomaterno="";
  domicilio="";
  telefono="";
  rfc="";
  usuario="";
  contrasena="";
  tipousuario="";
  fechacreacion="";
  url="";
  itemuserup:any;
  activePass: Boolean = true;
  public selecday = new Date();

  constructor(private router: Router, private route: ActivatedRoute, 
    private alertCtrl: AlertController, public navCtrl: NavController,
    private loadingController: LoadingController,
    private users: UsersService) { 
      this.route.queryParams.subscribe(params => {
        this.itemuserup = this.router.getCurrentNavigation().extras.state.usuarioup;
        this.idusuario = this.itemuserup.idusuario;
        this.nombre = this.itemuserup.nombre;
        this.apellidopaterno = this.itemuserup.apellidopaterno,
        this.apellidomaterno = this.itemuserup.apellidomaterno;
        this.domicilio = this.itemuserup.domicilio;
        this.telefono = this.itemuserup.telefono;
        this.rfc = this.itemuserup.rfc;
        this.usuario = this.itemuserup.usuario;
        this.contrasena = this.itemuserup.contraseña;
        this.tipousuario = this.itemuserup.tipousuario;
        this.fechacreacion = this.itemuserup.fechacreacion; 
        this.url = this.itemuserup.url;
      });
    }

  ngOnInit() {
  }

  toggleTextPassword(): void{
    this.activePass = (this.activePass==true)?false:true;
}
getType() {
    return this.activePass ? 'password' : 'text';
}

getName(){
  return this.activePass ? 'eye-off' : 'eye';
}

async validar(){
  if(this.nombre.length == 0 || this.apellidopaterno.length == 0 || this.apellidomaterno.length == 0 || 
  this.domicilio.length == 0 || this.telefono.length == 0 || this.usuario.length == 0 || this.contrasena.length == 0 ||
   this.rfc == " "){
    let alert = await this.alertCtrl.create({
      header: "!Error¡",
      subHeader: "Campos vacíos, favor de corregir",
      buttons: ["Ok"]
    });
    await alert.present();
  }else{
    this.confirmar();
  }
}

async confirmar(){
  var dia = this.selecday.getDate();
  var mes = this.selecday.getMonth()+1;
  var año = this.selecday.getFullYear();
  var fecha = año+"-"+mes+"-"+dia;
  //console.log(fecha);
    let alert = await this.alertCtrl.create({
      header: "¿Datos Correctos?",
      message: "Nombre: "+this.nombre+"<br/>Apellidos: "+this.apellidopaterno+" "+this.apellidomaterno+
      "<br/>Domicilio: "+this.domicilio+"<br/>Teléfono: "+this.telefono+"<br/>RFC: "+this.rfc+
      "<br/>Usuario: "+this.usuario+"<br/>Contraseña: "+this.contrasena+"<br/>Fecha Modificación: "+fecha,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.updateuser(fecha);
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

async updateuser(fec:string){
  let postData = {
    //"idUsuario": id,
    "Nombre": this.nombre,
    "ApellidoPaterno": this.apellidopaterno,
    "ApellidoMaterno": this.apellidomaterno,
    "Domicilio": this.domicilio,
    "Telefono": this.telefono,
    "RFC": this.rfc,
    "Usuario": this.usuario,
    "Contraseña": this.contrasena,
    "TipoUsuario": "Administrador",
    "Activo": "S",
    "FechaCreacion": this.fechacreacion,
    "FechaModificacion": fec
  }

  this.users.upUsers(this.url,this.idusuario,postData);

    const loading = await this.loadingController.create({
      message: 'Actualizando usuario..'
    });
    await loading.present();

    loading.dismiss();

    this.putconfirmacion();

}

async putconfirmacion(){
  if(this.users.msjput == "Successfull"){
    let alert = await this.alertCtrl.create({
      header: "¡Operación Exitosa!",
      subHeader: "Usuario "+this.usuario+" actualizado correctamente",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateRoot('menuadmin/micuenta');
          }
        }
      ]
    });
    await alert.present();
  }else{
    let alert = await this.alertCtrl.create({
      header: "¡Operación Fallida!",
      subHeader: "Hubo un problema al actualizar el usuario "+this.usuario,
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

back(){
  this.navCtrl.navigateRoot('menuadmin/micuenta');
}

}
