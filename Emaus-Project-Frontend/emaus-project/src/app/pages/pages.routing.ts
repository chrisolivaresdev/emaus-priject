import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { CaminantesComponent } from './caminantes/caminantes.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { RetirosComponent } from './retiros/retiros.component';
import { AuthGuard } from '../guards/auth.guard';
import { AddEditComponentsComponent } from './retiros/componenents/add-edit-components/add-edit-components.component';
import { ViewCaminantesByRetiroComponent } from './retiros/componenents/view-caminantes-by-retiro/view-caminantes-by-retiro.component';
import { AddEditCaminanteComponent } from './retiros/componenents/add-edit-caminante/add-edit-caminante.component';
import { ViewServidorByRetiroComponent } from './retiros/componenents/view-servidor-by-retiro/view-servidor-by-retiro.component';
import { AddEditServidorComponent } from './retiros/componenents/add-edit-servidor/add-edit-servidor.component';


const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'dashboard', component: DashboardComponent, data:{title: 'Dashboard'}},
      {path:'retiros', component: RetirosComponent, data:{title: 'Retiros'}},
      {path:'retiros/retiro', component: AddEditComponentsComponent, data:{title: 'Agregar retiro'}},
      {path:'retiros/editar-retiro/:id', component: AddEditComponentsComponent, data:{title: 'Editar retiro'}},
      {path:'retiros/:id/caminantes', component: ViewCaminantesByRetiroComponent, data:{title: 'Caminantes del retiro'}},
      {path:'retiros/:id/caminantes/agregar', component: AddEditCaminanteComponent, data:{title: 'Agregar caminantes'}},
      {path:'retiros/:id/caminantes/editar/:idCaminante', component: AddEditCaminanteComponent, data:{title: 'Editar caminantes'}},
      {path:'retiros/:id/servidor', component: ViewServidorByRetiroComponent, data:{title: 'Servidores del retiro'}},
      {path:'retiros/:id/servidor/agregar', component: AddEditServidorComponent, data:{title: 'Agregar servidores'}},
      {path:'retiros/:id/servidor/editar/:idServidor', component: AddEditServidorComponent, data:{title: 'Editar servidores'}},
      {path:'caminantes', component: CaminantesComponent, data:{title: 'Caminantes'}},
      {path:'servidores', component: ServidoresComponent, data:{title: 'Servidores'}},
      {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
