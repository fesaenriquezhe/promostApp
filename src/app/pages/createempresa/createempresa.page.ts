import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-createempresa',
  templateUrl: './createempresa.page.html',
  styleUrls: ['./createempresa.page.scss'],

})
export class CreateempresaPage implements OnInit {

  constructor (private platform: Platform, private alertCtrl : AlertController) {

  }

  ngOnInit() {
  }

  checkPlatform() {
    
  }

}
