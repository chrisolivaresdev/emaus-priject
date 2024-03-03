import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ServidoresService } from 'src/app/services/servidores.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-servidor',
  templateUrl: './add-edit-servidor.component.html',
  styleUrls: ['./add-edit-servidor.component.scss']
})
export class AddEditServidorComponent implements OnInit {

  edit!:boolean
  formGroup: FormGroup;
  idRetiro:any
  idServidor: any
  userActive!:User

  constructor(private router: Router, private servidoresService:ServidoresService, private ActivateRoute: ActivatedRoute, private fb:FormBuilder, private authService:AuthService) {
    this.formGroup = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        cedula: ['', [Validators.required]],
        fecha_nac: ['', [Validators.required]],
        estado_civ: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        estatura: ['', [Validators.required]],
        peso: ['', [Validators.required]],
        nombre_fam: ['', [Validators.required]],
        telefono_fam: ['', [Validators.required]],
        antecedentes_med: ['', [Validators.required]],
        tratamiento: ['', [Validators.required]],
        alergia: ['', [Validators.required]],
        aporte_eco: ['', [Validators.required]],
        notas: ['', [Validators.required]],
      }
      )
   }

  ngOnInit(): void {
    this.userActive = this.authService.userActive
    if(this.router.url.includes('editar')){
      this.ActivateRoute.params.subscribe({
        next: ({ idServidor, id }) => {
          this.idRetiro = id
          this.idServidor = idServidor
          this.getServidorById(this.idServidor)
        },
      });
      this.edit = true
    } else {
      this.ActivateRoute.params.subscribe({
        next: ({ id }) => {
          this.idRetiro = id
        },
      });
    }
  }

   getServidorById(id:any){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.servidoresService.getById(id).subscribe(resp => {
          const servidor =  resp.servidor
          if(servidor){
            this.formGroup.controls['nombre'].setValue(servidor.nombre);
            this.formGroup.controls['cedula'].setValue(servidor.cedula);
            this.formGroup.controls['fecha_nac'].setValue(servidor.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(servidor.estado_civ);
            this.formGroup.controls['direccion'].setValue(servidor.direccion);
            this.formGroup.controls['telefono'].setValue(servidor.telefono);
            this.formGroup.controls['estatura'].setValue(servidor.estatura);
            this.formGroup.controls['peso'].setValue(servidor.peso);
            this.formGroup.controls['nombre_fam'].setValue(servidor.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(servidor.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(servidor.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(servidor.tratamiento);
            this.formGroup.controls['alergia'].setValue(servidor.alergia);
            this.formGroup.controls['aporte_eco'].setValue(servidor.aporte_eco);
            this.formGroup.controls['notas'].setValue(servidor.notas);
          }
        })
        break;

      case 'SAMUEL':
        this.servidoresService.getByIdSamuel(id).subscribe(resp => {
          const servidor =  resp.servidor
          if(servidor){
            this.formGroup.controls['nombre'].setValue(servidor.nombre);
            this.formGroup.controls['cedula'].setValue(servidor.cedula);
            this.formGroup.controls['fecha_nac'].setValue(servidor.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(servidor.estado_civ);
            this.formGroup.controls['direccion'].setValue(servidor.direccion);
            this.formGroup.controls['telefono'].setValue(servidor.telefono);
            this.formGroup.controls['estatura'].setValue(servidor.estatura);
            this.formGroup.controls['peso'].setValue(servidor.peso);
            this.formGroup.controls['nombre_fam'].setValue(servidor.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(servidor.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(servidor.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(servidor.tratamiento);
            this.formGroup.controls['alergia'].setValue(servidor.alergia);
            this.formGroup.controls['aporte_eco'].setValue(servidor.aporte_eco);
            this.formGroup.controls['notas'].setValue(servidor.notas);
          }
        })
        break;

      case 'SERAFIN':
        this.servidoresService.getByIdSerafin(id).subscribe(resp => {
          const servidor =  resp.servidor
          if(servidor){
            this.formGroup.controls['nombre'].setValue(servidor.nombre);
            this.formGroup.controls['cedula'].setValue(servidor.cedula);
            this.formGroup.controls['fecha_nac'].setValue(servidor.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(servidor.estado_civ);
            this.formGroup.controls['direccion'].setValue(servidor.direccion);
            this.formGroup.controls['telefono'].setValue(servidor.telefono);
            this.formGroup.controls['estatura'].setValue(servidor.estatura);
            this.formGroup.controls['peso'].setValue(servidor.peso);
            this.formGroup.controls['nombre_fam'].setValue(servidor.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(servidor.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(servidor.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(servidor.tratamiento);
            this.formGroup.controls['alergia'].setValue(servidor.alergia);
            this.formGroup.controls['aporte_eco'].setValue(servidor.aporte_eco);
            this.formGroup.controls['notas'].setValue(servidor.notas);
          }
        })
        break;

      case 'SEMILLITA':
        this.servidoresService.getByIdSemillita(id).subscribe(resp => {
          const servidor =  resp.servidor
          if(servidor){
            this.formGroup.controls['nombre'].setValue(servidor.nombre);
            this.formGroup.controls['cedula'].setValue(servidor.cedula);
            this.formGroup.controls['fecha_nac'].setValue(servidor.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(servidor.estado_civ);
            this.formGroup.controls['direccion'].setValue(servidor.direccion);
            this.formGroup.controls['telefono'].setValue(servidor.telefono);
            this.formGroup.controls['estatura'].setValue(servidor.estatura);
            this.formGroup.controls['peso'].setValue(servidor.peso);
            this.formGroup.controls['nombre_fam'].setValue(servidor.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(servidor.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(servidor.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(servidor.tratamiento);
            this.formGroup.controls['alergia'].setValue(servidor.alergia);
            this.formGroup.controls['aporte_eco'].setValue(servidor.aporte_eco);
            this.formGroup.controls['notas'].setValue(servidor.notas);
          }
        })
        break;

      default:
        break;
    }

  }

  regresar(){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
  }


  save(){

    let body = {
      ...this.formGroup.value,
      retiro: this.idRetiro
    }

    if(this.edit){
      switch (this.userActive.role) {
        case 'EMAUS':
          this.servidoresService.update( this.idServidor, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el servidor!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.cedula){
              return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
             }
             if(err.error.errors?.fecha_nac){
              return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
             }
            if(err.error.errors?.estado_civ){
              return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
            }
            if(err.error.errors?.direccion){
              return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
             }
             if(err.error.errors?.telefono){
               return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
              }
              if(err.error.errors?.estatura){
               return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
              }
             if(err.error.errors?.peso){
               return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
             }
             if(err.error.errors?.nombre_fam){
              return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
             }
             if(err.error.errors?.telefono_fam){
               return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
              }
              if(err.error.errors?.antecedentes_med){
               return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
              }
             if(err.error.errors?.tratamiento){
               return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
             }
             if(err.error.errors?.alergia){
              return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
             }
            if(err.error.errors?.aporte_eco){
              return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
            }
            if(err.error.errors?.notas){
              return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SAMUEL':
          this.servidoresService.updateSamuel( this.idServidor, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el servidor!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.cedula){
              return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
             }
             if(err.error.errors?.fecha_nac){
              return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
             }
            if(err.error.errors?.estado_civ){
              return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
            }
            if(err.error.errors?.direccion){
              return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
             }
             if(err.error.errors?.telefono){
               return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
              }
              if(err.error.errors?.estatura){
               return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
              }
             if(err.error.errors?.peso){
               return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
             }
             if(err.error.errors?.nombre_fam){
              return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
             }
             if(err.error.errors?.telefono_fam){
               return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
              }
              if(err.error.errors?.antecedentes_med){
               return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
              }
             if(err.error.errors?.tratamiento){
               return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
             }
             if(err.error.errors?.alergia){
              return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
             }
            if(err.error.errors?.aporte_eco){
              return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
            }
            if(err.error.errors?.notas){
              return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SERAFIN':
          this.servidoresService.updateSerafin( this.idServidor, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el servidor!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.cedula){
              return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
             }
             if(err.error.errors?.fecha_nac){
              return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
             }
            if(err.error.errors?.estado_civ){
              return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
            }
            if(err.error.errors?.direccion){
              return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
             }
             if(err.error.errors?.telefono){
               return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
              }
              if(err.error.errors?.estatura){
               return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
              }
             if(err.error.errors?.peso){
               return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
             }
             if(err.error.errors?.nombre_fam){
              return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
             }
             if(err.error.errors?.telefono_fam){
               return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
              }
              if(err.error.errors?.antecedentes_med){
               return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
              }
             if(err.error.errors?.tratamiento){
               return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
             }
             if(err.error.errors?.alergia){
              return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
             }
            if(err.error.errors?.aporte_eco){
              return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
            }
            if(err.error.errors?.notas){
              return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SEMILLITA':
          this.servidoresService.updateSemillita( this.idServidor, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el servidor!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
            }, 500)
          },(err)=> {
            if(err.error.errors?.nombre){
             return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
            }
            if(err.error.errors?.cedula){
              return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
             }
             if(err.error.errors?.fecha_nac){
              return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
             }
            if(err.error.errors?.estado_civ){
              return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
            }
            if(err.error.errors?.direccion){
              return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
             }
             if(err.error.errors?.telefono){
               return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
              }
              if(err.error.errors?.estatura){
               return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
              }
             if(err.error.errors?.peso){
               return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
             }
             if(err.error.errors?.nombre_fam){
              return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
             }
             if(err.error.errors?.telefono_fam){
               return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
              }
              if(err.error.errors?.antecedentes_med){
               return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
              }
             if(err.error.errors?.tratamiento){
               return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
             }
             if(err.error.errors?.alergia){
              return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
             }
            if(err.error.errors?.aporte_eco){
              return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
            }
            if(err.error.errors?.notas){
              return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        default:
          break;
      }

    } else {
      switch (this.userActive.role) {
        case 'EMAUS':
          this.servidoresService.post(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el servidor!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.cedula){
             return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
            }
            if(err.error.errors?.fecha_nac){
             return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
            }
           if(err.error.errors?.estado_civ){
             return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
           }
           if(err.error.errors?.direccion){
             return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
            }
            if(err.error.errors?.telefono){
              return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
             }
             if(err.error.errors?.estatura){
              return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
             }
            if(err.error.errors?.peso){
              return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
            }
            if(err.error.errors?.nombre_fam){
             return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
            }
            if(err.error.errors?.telefono_fam){
              return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
             }
             if(err.error.errors?.antecedentes_med){
              return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
             }
            if(err.error.errors?.tratamiento){
              return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
            }
            if(err.error.errors?.alergia){
             return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
            }
           if(err.error.errors?.aporte_eco){
             return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
           }
           if(err.error.errors?.notas){
             return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SAMUEL':
          this.servidoresService.postSamuel(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el servidor!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.cedula){
             return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
            }
            if(err.error.errors?.fecha_nac){
             return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
            }
           if(err.error.errors?.estado_civ){
             return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
           }
           if(err.error.errors?.direccion){
             return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
            }
            if(err.error.errors?.telefono){
              return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
             }
             if(err.error.errors?.estatura){
              return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
             }
            if(err.error.errors?.peso){
              return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
            }
            if(err.error.errors?.nombre_fam){
             return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
            }
            if(err.error.errors?.telefono_fam){
              return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
             }
             if(err.error.errors?.antecedentes_med){
              return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
             }
            if(err.error.errors?.tratamiento){
              return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
            }
            if(err.error.errors?.alergia){
             return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
            }
           if(err.error.errors?.aporte_eco){
             return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
           }
           if(err.error.errors?.notas){
             return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SERAFIN':
          this.servidoresService.postSerafin(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el servidor!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.cedula){
             return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
            }
            if(err.error.errors?.fecha_nac){
             return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
            }
           if(err.error.errors?.estado_civ){
             return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
           }
           if(err.error.errors?.direccion){
             return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
            }
            if(err.error.errors?.telefono){
              return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
             }
             if(err.error.errors?.estatura){
              return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
             }
            if(err.error.errors?.peso){
              return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
            }
            if(err.error.errors?.nombre_fam){
             return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
            }
            if(err.error.errors?.telefono_fam){
              return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
             }
             if(err.error.errors?.antecedentes_med){
              return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
             }
            if(err.error.errors?.tratamiento){
              return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
            }
            if(err.error.errors?.alergia){
             return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
            }
           if(err.error.errors?.aporte_eco){
             return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
           }
           if(err.error.errors?.notas){
             return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
           }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SEMILLITA':
          this.servidoresService.postSemillita(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el servidor!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor`)
           }, 500)
         },(err)=> {
           if(err.error.errors?.nombre){
            return Swal.fire('Error', err.error.errors.nombre.msg, 'warning')
           }
           if(err.error.errors?.cedula){
             return Swal.fire('Error', err.error.errors.cedula.msg, 'warning')
            }
            if(err.error.errors?.fecha_nac){
             return Swal.fire('Error', err.error.errors.fecha_nac.msg, 'warning')
            }
           if(err.error.errors?.estado_civ){
             return Swal.fire('Error', err.error.errors.estado_civ.msg, 'warning')
           }
           if(err.error.errors?.direccion){
             return Swal.fire('Error', err.error.errors.direccion.msg, 'warning')
            }
            if(err.error.errors?.telefono){
              return Swal.fire('Error', err.error.errors.telefono.msg, 'warning')
             }
             if(err.error.errors?.estatura){
              return Swal.fire('Error', err.error.errors.estatura.msg, 'warning')
             }
            if(err.error.errors?.peso){
              return Swal.fire('Error', err.error.errors.peso.msg, 'warning')
            }
            if(err.error.errors?.nombre_fam){
             return Swal.fire('Error', err.error.errors.nombre_fam.msg, 'warning')
            }
            if(err.error.errors?.telefono_fam){
              return Swal.fire('Error', err.error.errors.telefono_fam.msg, 'warning')
             }
             if(err.error.errors?.antecedentes_med){
              return Swal.fire('Error', err.error.errors.antecedentes_med.msg, 'warning')
             }
            if(err.error.errors?.tratamiento){
              return Swal.fire('Error', err.error.errors.tratamiento.msg, 'warning')
            }
            if(err.error.errors?.alergia){
             return Swal.fire('Error', err.error.errors.alergia.msg, 'warning')
            }
           if(err.error.errors?.aporte_eco){
             return Swal.fire('Error', err.error.errors.aporte_eco.msg, 'warning')
           }
           if(err.error.errors?.notas){
             return Swal.fire('Error', err.error.errors.notas.msg, 'warning')
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
