import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-allempresas',
  templateUrl: './allempresas.page.html',
  styleUrls: ['./allempresas.page.scss'],
})
export class AllempresasPage {
  url="http://localhost:3000";
  username:string;
  password:string;
  datauser:any;

  constructor(public httpc: HttpClient,
    private router: Router) {
      this.httpc.get(this.url+"/empresas")
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

}
