import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmpresasService} from "./services/empresas.service";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'menuadmin', loadChildren: './pages/menuadmin/menuadmin.module#MenuadminPageModule' },
  { path: 'createempresa', loadChildren: './pages/createempresa/createempresa.module#CreateempresaPageModule' },
  { path: 'registeruser', loadChildren: './pages/registeruser/registeruser.module#RegisteruserPageModule' },
  { path: 'allempresas', loadChildren: './pages/allempresas/allempresas.module#AllempresasPageModule' },


];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers:[EmpresasService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
