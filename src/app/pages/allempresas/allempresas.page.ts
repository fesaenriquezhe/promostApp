import { Component, OnInit } from '@angular/core';
import { EmpresasService } from "../../services/empresas.service";
import { ModalController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-allempresas',
  templateUrl: './allempresas.page.html',
  styleUrls: ['./allempresas.page.scss'],
})
export class AllempresasPage implements OnInit {

  empresas: any; 
  data : any
  
  Nombre=""

  constructor (private empresaService : EmpresasService, private modalController: ModalController,
    private router : Router, private activatedRoute : ActivatedRoute,private  navController :NavController) {
      console.log('Estas en lista de empresa ts')
      
  }

  ngOnInit() {
    this.empresaService.getEmpresas().then(empre => {
      if(this.empresaService !=null){ 
      this.empresas = empre;
      }else{
        console.log('No existen empresas');
      }
      this.ngOnInit();
      
    });
  }
  

  eliminarEmpresa(idEmpresa){
    this.empresaService.deleteEmpresa(idEmpresa).subscribe((response) => {
      this.router.navigate(['allempresas']);
      this.ngOnInit();
    });
  }

  doRefresh(event) {
    console.log('Incio de refrescar');

    setTimeout(() => {
      console.log('refrescar terminado');
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  
}
