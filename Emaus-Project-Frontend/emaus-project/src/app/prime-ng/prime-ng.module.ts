import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    TableModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    DialogModule
  ],
  exports:[
    TableModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
