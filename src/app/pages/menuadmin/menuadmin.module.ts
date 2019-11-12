import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuadminPage } from './menuadmin.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menuadmin/inicioadmin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuadminPage,
    children: [
      { path: 'mispromociones', loadChildren: '../mispromociones/mispromociones.module#MispromocionesPageModule' },
      { path: 'miempresa', loadChildren: '../miempresa/miempresa.module#MiempresaPageModule' },
      { path: 'micuenta', loadChildren: '../micuenta/micuenta.module#MicuentaPageModule' },
      { path: 'inicioadmin', loadChildren: '../inicioadmin/inicioadmin.module#InicioadminPageModule' },
      { path: 'acercade', loadChildren: '../acercade/acercade.module#AcercadePageModule' },
      { path: 'updateuser', loadChildren: '../updateuser/updateuser.module#UpdateuserPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuadminPage]
})
export class MenuadminPageModule {}
