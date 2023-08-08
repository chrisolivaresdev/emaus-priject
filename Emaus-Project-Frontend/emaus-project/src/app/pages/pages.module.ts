import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { RetirosComponent } from './retiros/retiros.component';
import { CaminantesComponent } from './caminantes/caminantes.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { PagesRoutingModule } from './pages.routing';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService } from 'primeng/api';
import { AddEditComponentsComponent } from './retiros/componenents/add-edit-components/add-edit-components.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCaminantesByRetiroComponent } from './retiros/componenents/view-caminantes-by-retiro/view-caminantes-by-retiro.component';
import { AddEditCaminanteComponent } from './retiros/componenents/add-edit-caminante/add-edit-caminante.component';
import { AddEditServidorComponent } from './retiros/componenents/add-edit-servidor/add-edit-servidor.component';
import { ViewServidorByRetiroComponent } from './retiros/componenents/view-servidor-by-retiro/view-servidor-by-retiro.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    RetirosComponent,
    CaminantesComponent,
    ServidoresComponent,
    AddEditComponentsComponent,
    ViewCaminantesByRetiroComponent,
    AddEditCaminanteComponent,
    AddEditServidorComponent,
    ViewServidorByRetiroComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  providers: [ConfirmationService]
})
export class PagesModule { }
