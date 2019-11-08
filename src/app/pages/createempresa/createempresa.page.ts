import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { EmpresasService } from "../../services/empresas.service";



@Component({
  selector: 'app-createempresa',
  templateUrl: './createempresa.page.html',
  styleUrls: ['./createempresa.page.scss'],

})
export class CreateempresaPage implements OnInit{

  empresas: any; 

  constructor (private empresa : EmpresasService) {
      
  }

  ngOnInit() {
    
  }

  

}
