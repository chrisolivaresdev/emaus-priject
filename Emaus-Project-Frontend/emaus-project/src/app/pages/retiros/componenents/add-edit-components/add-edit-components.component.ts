import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RetiroService } from 'src/app/services/retiro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-components',
  templateUrl: './add-edit-components.component.html',
  styleUrls: ['./add-edit-components.component.scss']
})
export class AddEditComponentsComponent implements OnInit {

  edit!:boolean
  formGroup: FormGroup;
  idRetiro:any
  userActive!:User

  constructor(private router: Router, private retiroService:RetiroService, private ActivateRoute: ActivatedRoute, private fb:FormBuilder,  private authService:AuthService) {
    this.formGroup = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        casa_ret: ['', [Validators.required]],
        fecha_ini: ['', [Validators.required]],
        fecha_cul: ['', [Validators.required]],
      }
      )
   }

  ngOnInit(): void {
    this.userActive = this.authService.userActive
    if(this.router.url.includes('editar-retiro')){
      this.ActivateRoute.params.subscribe({
        next: ({ id }) => {
          this.idRetiro = id
          this.getRetiroById(this.idRetiro);
        },
      });
      this.edit = true
    }

  }

   getRetiroById(id:any){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.retiroService.getById(id).subscribe(resp => {
          const retiro =  resp.retiro
          if(retiro){
            console.log(retiro)
            this.formGroup.controls['nombre'].setValue(retiro.nombre);
            this.formGroup.controls['casa_ret'].setValue(retiro.casa_ret);
            this.formGroup.controls['fecha_ini'].setValue(retiro.fecha_ini);
            this.formGroup.controls['fecha_cul'].setValue(retiro.fecha_cul);
          }
        })
        break;

      case 'SAMUEL':
        this.retiroService.getByIdSamuel(id).subscribe(resp => {
          const retiro =  resp.retiro
          if(retiro){
            console.log(retiro)
            this.formGroup.controls['nombre'].setValue(retiro.nombre);
            this.formGroup.controls['casa_ret'].setValue(retiro.casa_ret);
            this.formGroup.controls['fecha_ini'].setValue(retiro.fecha_ini);
            this.formGroup.controls['fecha_cul'].setValue(retiro.fecha_cul);

          }
        })
        break;

      case 'SERAFIN':
        this.retiroService.getByIdSerafin(id).subscribe(resp => {
          const retiro =  resp.retiro
          if(retiro){
            console.log(retiro)
            this.formGroup.controls['nombre'].setValue(retiro.nombre);
            this.formGroup.controls['casa_ret'].setValue(retiro.casa_ret);
            this.formGroup.controls['fecha_ini'].setValue(retiro.fecha_ini);
            this.formGroup.controls['fecha_cul'].setValue(retiro.fecha_cul);

          }
        })
        break;

      case 'SEMILLITA':
        this.retiroService.getByIdSemillita(id).subscribe(resp => {
          const retiro =  resp.retiro
          if(retiro){
            console.log(retiro)
            this.formGroup.controls['nombre'].setValue(retiro.nombre);
            this.formGroup.controls['casa_ret'].setValue(retiro.casa_ret);
            this.formGroup.controls['fecha_ini'].setValue(retiro.fecha_ini);
            this.formGroup.controls['fecha_cul'].setValue(retiro.fecha_cul);

          }
        })
        break;

      default:
        break;
    }

  }

  regresar(){
    this.router.navigateByUrl('/retiros')
  }


  save(){

    let body = {
      ...this.formGroup.value
    }

    if(this.edit){
      switch (this.userActive.role) {
        case 'EMAUS':
          this.retiroService.update(this.idRetiro, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el retiro!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl('/retiros')
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.casa_ret){
              return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
             }
             if(err.error.errors?.fecha_ini){
              return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
             }
            if(err.error.errors?.fecha_cul){
              return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          })
          break;

        case 'SAMUEL':
          this.retiroService.updateSamuel(this.idRetiro, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el retiro!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl('/retiros')
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.casa_ret){
              return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
             }
             if(err.error.errors?.fecha_ini){
              return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
             }
            if(err.error.errors?.fecha_cul){
              return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          })
          break;

        case 'SERAFIN':
          this.retiroService.updateSerafin(this.idRetiro, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el retiro!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl('/retiros')
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.casa_ret){
              return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
             }
             if(err.error.errors?.fecha_ini){
              return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
             }
            if(err.error.errors?.fecha_cul){
              return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          })
          break;

        case 'SEMILLITA':
          this.retiroService.updateSemillita(this.idRetiro, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el retiro!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl('/retiros')
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.casa_ret){
              return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
             }
             if(err.error.errors?.fecha_ini){
              return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
             }
            if(err.error.errors?.fecha_cul){
              return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          })
          break;

        default:
          break;
      }
    } else {
      switch (this.userActive.role) {
        case 'EMAUS':
          this.retiroService.post(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el retiro!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl('/retiros')
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.casa_ret){
             return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
            }
            if(err.error.errors?.fecha_ini){
             return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
            }
           if(err.error.errors?.fecha_cul){
             return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SAMUEL':
          this.retiroService.postSamuel(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el retiro!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl('/retiros')
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.casa_ret){
             return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
            }
            if(err.error.errors?.fecha_ini){
             return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
            }
           if(err.error.errors?.fecha_cul){
             return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SERAFIN':
          this.retiroService.postSerafin(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el retiro!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl('/retiros')
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.casa_ret){
             return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
            }
            if(err.error.errors?.fecha_ini){
             return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
            }
           if(err.error.errors?.fecha_cul){
             return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SEMILLITA':
          this.retiroService.postSemillita(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el retiro!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl('/retiros')
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.casa_ret){
             return Swal.fire('Error', err.error.errors.casa_ret.msg, 'warning')
            }
            if(err.error.errors?.fecha_ini){
             return Swal.fire('Error', err.error.errors.fecha_ini.msg, 'warning')
            }
           if(err.error.errors?.fecha_cul){
             return Swal.fire('Error', err.error.errors.fecha_cul.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        default:
          break;
      }
    }
  }



}
