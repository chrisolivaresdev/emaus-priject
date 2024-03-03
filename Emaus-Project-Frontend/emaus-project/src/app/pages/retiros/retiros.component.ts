import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RetiroService } from 'src/app/services/retiro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retiros',
  templateUrl: './retiros.component.html',
  styleUrls: ['./retiros.component.scss']
})
export class RetirosComponent implements OnInit {

  visible: boolean = false;
  retiros:any
  retiroSelected:any
  cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'casa_ret', header: 'Casa de retiro'},
    { field: 'fecha_ini', header: 'Fecha de inicio' },
    { field: 'fecha_cul', header: 'Fecha de culminación' },
    { field: 'Acciones', header: 'Acciones' }
  ];
  userActive!:User

  constructor(private retiroService:RetiroService, private confirmationService: ConfirmationService, private router:Router, private authService:AuthService)
  {}

  ngOnInit(): void {

    this.userActive = this.authService.userActive
    this.getRetiros()
  }

  getRetiros(){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.retiroService.get().subscribe(resp => {
          console.log(resp)
          this.retiros = resp.retiro
        })
        break;

      case 'SAMUEL':
        this.retiroService.getSamuel().subscribe(resp => {
          console.log(resp)
          this.retiros = resp.retiro
        })
        break;

      case 'SERAFIN':
        this.retiroService.getSerafin().subscribe(resp => {
          console.log(resp)
          this.retiros = resp.retiro
        })
        break;

      case 'SEMILLITA':
        this.retiroService.getSemillita().subscribe(resp => {
          console.log(resp)
          this.retiros = resp.retiro
        })
        break;

      default:
        break;
    }
  }

  show(retiro:any){
    this.visible = true;
    this.retiroSelected = retiro
  }

  verCaminantes(retiro:any){
    this.router.navigateByUrl(`retiros/${retiro._id}/caminantes`)
  }

  verServidor(retiro:any){
    this.router.navigateByUrl(`retiros/${retiro._id}/servidor`)
  }

  eliminar(){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.retiroService.delete(this.retiroSelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el retiro!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {

         return Swal.fire('Error', err.error.msg, 'warning')
        }
        )
        break;

      case 'SAMUEL':
        this.retiroService.deleteSamuel(this.retiroSelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el retiro!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {

         return Swal.fire('Error', err.error.msg, 'warning')
        }
        )
        break;

      case 'SERAFIN':
        this.retiroService.deleteSerafin(this.retiroSelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el retiro!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {

         return Swal.fire('Error', err.error.msg, 'warning')
        }
        )
        break;

      case 'SEMILLITA':
        this.retiroService.deleteSemillita(this.retiroSelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el retiro!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {

         return Swal.fire('Error', err.error.msg, 'warning')
        }
        )
        break;

      default:
        break;
    }

  }

  add(){
    this.router.navigateByUrl('/retiros/retiro')
  }

  editar(retiro:any){
    this.router.navigateByUrl(`retiros/editar-retiro/${retiro._id}`)
  }


}
