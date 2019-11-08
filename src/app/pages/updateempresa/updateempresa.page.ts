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
  data: Empresa;

  constructor(private empresaService : EmpresasService, private empresa : Empresa,
      private activatedRoute : ActivatedRoute, private router : Router) { 
        this.data = new Empresa();
      }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.empresaService.getEmpresasById(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

  ActualizarEmpresa() {
    //Update item by taking id and updated data object
    this.empresaService.updateEmpresa(this.id, this.data).subscribe(response => {
      this.router.navigate(['allempresas']);
      console.log(this.data);
    })
  }
 

}
