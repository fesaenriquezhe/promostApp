import { Component, OnInit } from '@angular/core';
import { EmpresasService } from "../../services/empresas.service";
import { Router } from '@angular/router';
import { Empresa } from "../../models/empresa";



@Component({
  selector: 'app-createempresa',
  templateUrl: './createempresa.page.html',
  styleUrls: ['./createempresa.page.scss'],

})
export class CreateempresaPage implements OnInit{
  
  data : Empresa;

  constructor (private empresa : EmpresasService, private router : Router) {
    this.data = new Empresa();
  }

  ngOnInit() {
    
    }

    AgreagarEmpresa(){
      console.log(this.data)
      this.empresa.addEmpresa(this.data).subscribe((response) => {
        this.router.navigate(['allempresas']);
      });
      }
}