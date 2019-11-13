import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  public registerFormU: FormGroup;
  public selecday = new Date();
  //datauser:any;
  //maxuse:any;
  url="";
  //msj="";
  //resdata:any;
  itemregi:any;

  constructor(public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router, 
    public httpc: HttpClient,
    private loadingController: LoadingController,
    private users: UsersService) { 
      this.route.queryParams.subscribe(params => {
        this.itemregi = this.router.getCurrentNavigation().extras.state.reguser;
        this.url = this.itemregi.url;
      });
      this.registerFormU = formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź ]*$/)])],
        firstlast: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź ]*$/)])],
        secondlast: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź ]*$/)])],
        addres: ['', [Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź0-9 ]*$/)]],
        phone: ['', [Validators.required,Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
        rfc: ['', [Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź0-9 ]*$/)]],
        user: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź0-9 ]*$/)])],
        password: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź0-9 ]*$/)])],
        cpassword: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź0-9 ]*$/)])]
      });
    }

  ngOnInit() {
    this.users.getUsers(this.url);
    this.users.getUsersMax(this.url);
  }

  async existuser(){
    //this.confirmar();
    var us = this.registerFormU.value.user;
    var obuser = this.users.datauser.find(function(user){
      return user.Usuario == us;
    });
    if(obuser != undefined){
      let alert = await this.alertCtrl.create({
        header: "Error",
        subHeader: "El usuario "+us+" ya existe!",
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
    if(this.registerFormU.value.password == this.registerFormU.value.cpassword){
      let alert = await this.alertCtrl.create({
        header: "¿Datos Correctos?",
        message: "Nombre: "+this.registerFormU.value.name+"<br/>Apellidos: "+this.registerFormU.value.firstlast+" "+this.registerFormU.value.secondlast+
        "<br/>Domicilio: "+this.registerFormU.value.addres+"<br/>Teléfono: "+this.registerFormU.value.phone+"<br/>RFC: "+this.registerFormU.value.rfc+
        "<br/>Usuario: "+this.registerFormU.value.user+"<br/>Contraseña: "+this.registerFormU.value.password+"<br/>Fecha: "+fecha,
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.registrar(fecha);
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
    }else{
      let alert = await this.alertCtrl.create({
        header: "Error",
        subHeader: "Las contraeñas no coinciden",
        buttons: ["Ok"]
      });
      await alert.present();
    }
  }

  async registrar(fec: string){

    var id=document.getElementById('maxid').innerHTML;

    let postData = {
        "idUsuario": id,
        "Nombre": this.registerFormU.value.name,
        "ApellidoPaterno": this.registerFormU.value.firstlast,
        "ApellidoMaterno": this.registerFormU.value.secondlast,
        "Domicilio": this.registerFormU.value.addres,
        "Telefono": this.registerFormU.value.phone,
        "RFC": this.registerFormU.value.rfc,
        "Usuario": this.registerFormU.value.user,
        "Contraseña": this.registerFormU.value.password,
        "TipoUsuario": "Administrador",
        "Activo": "S",
        "FechaCreacion": fec,
        "FechaModificacion": fec
    }

    this.users.addUsers(this.url,postData);

    const loading = await this.loadingController.create({
      message: 'Guardando usuario..'
    });
    await loading.present();

    loading.dismiss();

    this.postconfirmacion();
  
  }

  async postconfirmacion(){
    if(this.users.msjpost == "Successfull"){
      let alert = await this.alertCtrl.create({
        header: "¡Operación Exitosa!",
        subHeader: "Usuario "+this.registerFormU.value.user+" creado correctamente",
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.navigateRoot('home');
            }
          }
        ]
      });
      await alert.present();
    }else{
      let alert = await this.alertCtrl.create({
        header: "¡Operación Fallida!",
        subHeader: "Hubo un problema al crear el usuario "+this.registerFormU.value.user,
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
  
  backlogin(){
    this.navCtrl.navigateRoot('home');
  }

  

}
