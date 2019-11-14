import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  id : any;
  url="http://localhost:3000";
  username:string;
  password:string;
  datauser:any;
  itemuser:any;
  itemreg: any;

  constructor(public httpc: HttpClient,
    public alertCtrl: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private users: UsersService,
    private activatedrouter : ActivatedRoute) {}

    ngOnInit(){
      /*this.httpc.get(this.url+"/usuarios")
        .subscribe(
            res => {
                this.datauser = res;
                console.log(this.datauser);
            },
            error => {
                console.log(error);
            }
        );*/
        this.users.getUsers(this.url);
    }

    async login(){
      //this.router.navigate(['/menuadmin']);
      var us = this.username;
      var ps = this.password;
      var objuser = this.users.datauser.find(function(user){
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
            fechacreacion: objuser.FechaCreacion,
            url:this.url
          }
  
          let navigationExtras: NavigationExtras = {
            state: {
              usuario: this.itemuser
            }
          }
  
          this.router.navigate(['/menuadmin'],navigationExtras);
        }else{
          let alert = await this.alertCtrl.create({
            header: "¡Error!",
            subHeader: "La contraeña es incorrecta",
            buttons: ["Ok"]
          });
          await alert.present();          
        }
      }else{
        let alert = await this.alertCtrl.create({
          header: "¡Error!",
          subHeader: "El usuario "+us+" no existe",
          buttons: ["Ok"]
        });
        await alert.present();        
      }
    
      }

      register(){
        this.itemreg = {
          url:this.url
        }
        let navigationExtras: NavigationExtras = {
          state: {
            reguser: this.itemreg
          }
        }
        this.router.navigate(['/registeruser'], navigationExtras);
      }

}
