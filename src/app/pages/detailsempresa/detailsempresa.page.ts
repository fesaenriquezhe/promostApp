import { Component, OnInit } from '@angular/core';
import { EmpresasService } from "../../services/empresas.service";
import { Empresa } from "../../models/empresa";
import { ActivatedRoute, Router } from '@angular/router';
import { MenuadminPage } from "../menuadmin/menuadmin.page";
import { AlertController, LoadingController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-detailsempresa',
  templateUrl: './detailsempresa.page.html',
  styleUrls: ['./detailsempresa.page.scss'],
})
export class DetailsempresaPage implements OnInit {

  id = "";
  data: any;

  Nombre : any;
  RFC : any;
  Domicilio : any;
  Activo : any;
  FechaCreacion : Date;
  FechaModificacion : Date;

  constructor(private empresaService : EmpresasService, private empresa : Empresa,
    private activatedRoute : ActivatedRoute, private router : Router, private menuAdmin : MenuadminPage,
    private alertController : AlertController, private loadingController : LoadingController) { 
      console.log('Estas en update empresa')
      //this.data2 = new Empresa();
      
      
    }

    ngOnInit() {
      this.id = this.menuAdmin.idusuario;
          //get item details using id
          this.empresaService.getEmpresaUsuario(this.id).subscribe(response => { 
            this.data = response;            
            for(let i=0;i<this.data.length;i++){
              this.Nombre = this.data[i].Nombre
              this.RFC = this.data[i].RFC
              this.Domicilio = this.data[i].Domicilio,
              this.FechaCreacion = this.data[i].FechaCreacion
              this.FechaModificacion = this.data[i].FechaModificacion
            }
      console.log(this.id)
      this.ngOnInit();
      });
    }

    enviarPageActualizar(){
      this.router.navigate(['updateempresa/'+this.id]);
    }

    eliminarEmpresa(){      
      this.empresaService.deleteEmpresa(this.id).subscribe((response) => {
        this.router.navigate(['menuadmin/detailsempresa/id]']);
        this.ngOnInit();
      });
    }
}
