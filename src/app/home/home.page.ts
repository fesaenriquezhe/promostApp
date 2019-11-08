import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  url="http://localhost:3000";
  username:string;
  password:string;
  datauser:any;
  itemuser:any;

  constructor(public httpc: HttpClient,
    public alertCtrl: AlertController,
    private loadingController: LoadingController,
    private router: Router) {}

    ngOnInit(){
      this.httpc.get(this.url+"/usuarios")
        .subscribe(
            res => {
                this.datauser = res;
                console.log(this.datauser);
            },
            error => {
                console.log(error);
            }
        );
    }

    async login(){
      this.router.navigate(['/menuadmin']);
      /*var us = this.username;
      var ps = this.password;
      var objuser = this.datauser.find(function(user){
        return user.Usuario == us;
      });
      if(objuser != undefined){
        if(objuser.Contraseña == ps){
          const loading = await this.loadingController.create({
            message: 'Iniciando sesíon..'
          });
          await loading.present();
    
          loading.dismiss();
  
          this.itemuser = {
            idusuario: objuser.idUsuario,
            nombre: objuser.Nombre,
            apellidopaterno: objuser.ApellidoPaterno,
            apellidomaterno: objuser.ApellidoMaterno,
            domicilio: objuser.Domicilio,
            telefono: objuser.Telefono,
            rfc: objuser.RFC,
            usuario:objuser.Usuario,
            contraseña:objuser.Contraseña,
            tipousuario: objuser.TipoUsuario,
            url:this.url
          }
  
          let navigationExtras: NavigationExtras = {
            state: {
              usuario: this.itemuser
            }
          }
  
          this.router.navigate(['/menuadmin'],navigationExtras);
        }else{
          
        }
      }else{
        
      }*/
    
      }

      register(){
        this.router.navigate(['/registeruser']);
      }

}
