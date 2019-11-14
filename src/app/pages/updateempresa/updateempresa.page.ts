import { Component, OnInit } from '@angular/core';
import { EmpresasService } from "../../services/empresas.service";
import { Empresa } from "../../models/empresa";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateempresa',
  templateUrl: './updateempresa.page.html',
  styleUrls: ['./updateempresa.page.scss'],
})
export class UpdateempresaPage implements OnInit {

  id: number;
  data: any;
  

  Nombre : any;
  RFC : any;
  Domicilio : any;
  Activo : any;
  FechaCreacion : Date;
  FechaModificacion : Date;

  constructor(private empresaService : EmpresasService, private empresa : Empresa,
      private activatedRoute : ActivatedRoute, private router : Router) { 
        console.log('Estas en update empresa')
        //this.data2 = new Empresa();
        
        
      }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
        //get item details using id
        this.empresaService.getEmpresasById(this.id).subscribe(response => { 
          this.data = response;
          for(let i=0;i<this.data.length;i++){
            this.Nombre = this.data[i].Nombre
            this.RFC = this.data[i].RFC
            this.Domicilio = this.data[i].Domicilio,
            this.FechaCreacion = this.data[i].FechaCreacion
            this.FechaModificacion = this.data[i].FechaModificacion
          }
                
    });
  }

  ActualizarEmpresa() {
    console.log('Actualizar Empresa')
    this.data = {
      "Nombre" : this.Nombre,
      "RFC" : this.RFC,
      "Domicilio": this.Domicilio,
      "Activo" : this.Activo,
      "FechaCreacion" : this.FechaCreacion,
      "FechaModificacion" : this.FechaModificacion
    };
    console.log(this.Nombre)
    this.empresaService.updateEmpresa(this.id, this.data).subscribe(response => {
      this.router.navigate(['menuadmin/detailsempresa/id']);
      // console.log(this.data); 
    }) 
  }
 

}
