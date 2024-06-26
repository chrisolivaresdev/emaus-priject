import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CaminantesService } from 'src/app/services/caminantes.service';
import { ImageService } from 'src/app/services/image.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-caminante',
  templateUrl: './add-edit-caminante.component.html',
  styleUrls: ['./add-edit-caminante.component.scss']
})
export class AddEditCaminanteComponent implements OnInit {

  edit!:boolean
  formGroup: FormGroup;
  idRetiro:any
  idCaminante: any
  userActive!:User

  constructor(private router: Router, private caminantesService:CaminantesService, private ActivateRoute: ActivatedRoute, private fb:FormBuilder, private authService:AuthService, private imageService:ImageService) {
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
        postulante: ['', [Validators.required]],
        img:['']
      }
      )
   }

  ngOnInit(): void {
    this.userActive = this.authService.userActive
    if(this.router.url.includes('editar')){
      this.ActivateRoute.params.subscribe({
        next: ({ idCaminante, id }) => {
          this.idRetiro = id
          this.idCaminante = idCaminante
          this.getCaminanteById(this.idCaminante)
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

   getCaminanteById(id:any){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.caminantesService.getById(id).subscribe(resp => {
          const caminante =  resp.caminante
          if(caminante){
            this.formGroup.controls['nombre'].setValue(caminante.nombre);
            this.formGroup.controls['cedula'].setValue(caminante.cedula);
            this.formGroup.controls['fecha_nac'].setValue(caminante.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(caminante.estado_civ);
            this.formGroup.controls['direccion'].setValue(caminante.direccion);
            this.formGroup.controls['telefono'].setValue(caminante.telefono);
            this.formGroup.controls['estatura'].setValue(caminante.estatura);
            this.formGroup.controls['peso'].setValue(caminante.peso);
            this.formGroup.controls['nombre_fam'].setValue(caminante.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(caminante.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(caminante.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(caminante.tratamiento);
            this.formGroup.controls['alergia'].setValue(caminante.alergia);
            this.formGroup.controls['aporte_eco'].setValue(caminante.aporte_eco);
            this.formGroup.controls['notas'].setValue(caminante.notas);
            this.formGroup.controls['postulante'].setValue(caminante.postulante);
            this.formGroup.controls['img'].setValue(caminante.img);
          }
        })
        break;

      case 'SAMUEL':
        this.caminantesService.getByIdSamuel(id).subscribe(resp => {
          const caminante =  resp.caminante
          if(caminante){
            this.formGroup.controls['nombre'].setValue(caminante.nombre);
            this.formGroup.controls['cedula'].setValue(caminante.cedula);
            this.formGroup.controls['fecha_nac'].setValue(caminante.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(caminante.estado_civ);
            this.formGroup.controls['direccion'].setValue(caminante.direccion);
            this.formGroup.controls['telefono'].setValue(caminante.telefono);
            this.formGroup.controls['estatura'].setValue(caminante.estatura);
            this.formGroup.controls['peso'].setValue(caminante.peso);
            this.formGroup.controls['nombre_fam'].setValue(caminante.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(caminante.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(caminante.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(caminante.tratamiento);
            this.formGroup.controls['alergia'].setValue(caminante.alergia);
            this.formGroup.controls['aporte_eco'].setValue(caminante.aporte_eco);
            this.formGroup.controls['notas'].setValue(caminante.notas);
            this.formGroup.controls['postulante'].setValue(caminante.postulante);
            this.formGroup.controls['img'].setValue(caminante.img);
          }
        })
        break;

      case 'SERAFIN':
        this.caminantesService.getByIdSerafin(id).subscribe(resp => {
          const caminante =  resp.caminante
          if(caminante){
            this.formGroup.controls['nombre'].setValue(caminante.nombre);
            this.formGroup.controls['cedula'].setValue(caminante.cedula);
            this.formGroup.controls['fecha_nac'].setValue(caminante.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(caminante.estado_civ);
            this.formGroup.controls['direccion'].setValue(caminante.direccion);
            this.formGroup.controls['telefono'].setValue(caminante.telefono);
            this.formGroup.controls['estatura'].setValue(caminante.estatura);
            this.formGroup.controls['peso'].setValue(caminante.peso);
            this.formGroup.controls['nombre_fam'].setValue(caminante.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(caminante.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(caminante.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(caminante.tratamiento);
            this.formGroup.controls['alergia'].setValue(caminante.alergia);
            this.formGroup.controls['aporte_eco'].setValue(caminante.aporte_eco);
            this.formGroup.controls['notas'].setValue(caminante.notas);
            this.formGroup.controls['postulante'].setValue(caminante.postulante);
            this.formGroup.controls['img'].setValue(caminante.img);
          }
        })
        break;

      case 'SEMILLITA':
        this.caminantesService.getByIdSemillita(id).subscribe(resp => {
          const caminante =  resp.caminante
          if(caminante){
            this.formGroup.controls['nombre'].setValue(caminante.nombre);
            this.formGroup.controls['cedula'].setValue(caminante.cedula);
            this.formGroup.controls['fecha_nac'].setValue(caminante.fecha_nac);
            this.formGroup.controls['estado_civ'].setValue(caminante.estado_civ);
            this.formGroup.controls['direccion'].setValue(caminante.direccion);
            this.formGroup.controls['telefono'].setValue(caminante.telefono);
            this.formGroup.controls['estatura'].setValue(caminante.estatura);
            this.formGroup.controls['peso'].setValue(caminante.peso);
            this.formGroup.controls['nombre_fam'].setValue(caminante.nombre_fam);
            this.formGroup.controls['telefono_fam'].setValue(caminante.telefono_fam);
            this.formGroup.controls['antecedentes_med'].setValue(caminante.antecedentes_med);
            this.formGroup.controls['tratamiento'].setValue(caminante.tratamiento);
            this.formGroup.controls['alergia'].setValue(caminante.alergia);
            this.formGroup.controls['aporte_eco'].setValue(caminante.aporte_eco);
            this.formGroup.controls['notas'].setValue(caminante.notas);
            this.formGroup.controls['postulante'].setValue(caminante.postulante);
            this.formGroup.controls['img'].setValue(caminante.img);
          }
        })
        break;

      default:
        break;
    }
     this.caminantesService.getById(id).subscribe(resp => {
      const caminante =  resp.caminante
      if(caminante){
        this.formGroup.controls['nombre'].setValue(caminante.nombre);
        this.formGroup.controls['cedula'].setValue(caminante.cedula);
        this.formGroup.controls['fecha_nac'].setValue(caminante.fecha_nac);
        this.formGroup.controls['estado_civ'].setValue(caminante.estado_civ);
        this.formGroup.controls['direccion'].setValue(caminante.direccion);
        this.formGroup.controls['telefono'].setValue(caminante.telefono);
        this.formGroup.controls['estatura'].setValue(caminante.estatura);
        this.formGroup.controls['peso'].setValue(caminante.peso);
        this.formGroup.controls['nombre_fam'].setValue(caminante.nombre_fam);
        this.formGroup.controls['telefono_fam'].setValue(caminante.telefono_fam);
        this.formGroup.controls['antecedentes_med'].setValue(caminante.antecedentes_med);
        this.formGroup.controls['tratamiento'].setValue(caminante.tratamiento);
        this.formGroup.controls['alergia'].setValue(caminante.alergia);
        this.formGroup.controls['aporte_eco'].setValue(caminante.aporte_eco);
        this.formGroup.controls['notas'].setValue(caminante.notas);
        this.formGroup.controls['postulante'].setValue(caminante.postulante);
        this.formGroup.controls['img'].setValue(caminante.img);
      }
    })
  }

  regresar(){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
  }


  save(){

    let body = {
      ...this.formGroup.value,
      retiro: this.idRetiro
    }

    if(this.edit){

      switch (this.userActive.role) {
        case 'EMAUS':
          this.caminantesService.update( this.idCaminante, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el caminante!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
            if(err.error.errors?.postulante){
              return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SAMUEL':
          this.caminantesService.updateSamuel( this.idCaminante, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el caminante!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
            if(err.error.errors?.postulante){
              return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SERAFIN':
          this.caminantesService.updateSerafin( this.idCaminante, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el caminante!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
            if(err.error.errors?.postulante){
              return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
            }
           return Swal.fire('Error', err.error.msg, 'warning')
          }
          )
          break;

        case 'SEMILLITA':
          this.caminantesService.updateSemillita( this.idCaminante, body).subscribe(resp => {
            Swal.fire(
              'Bien!',
              'Se ha actualizado correctamente el caminante!!',
              'success'
            )
            return setTimeout(()=>{
              this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
            if(err.error.errors?.postulante){
              return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
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
          this.caminantesService.post(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el caminante!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
           if(err.error.errors?.postulante){
            return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
          }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SAMUEL':
          this.caminantesService.postSamuel(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el caminante!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
           if(err.error.errors?.postulante){
            return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
          }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SERAFIN':
          this.caminantesService.postSerafin(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el caminante!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
           if(err.error.errors?.postulante){
            return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
          }
          return Swal.fire('Error', err.error.msg, 'warning')
         }
         )
          break;

        case 'SEMILLITA':
          this.caminantesService.postSemillita(body).subscribe(resp => {
            Swal.fire(
             'Felicidades!',
             'Se ha guardado correctamente el caminante!!',
             'success'
           )
           return setTimeout(()=>{
             this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes`)
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
           if(err.error.errors?.postulante){
            return Swal.fire('Error', err.error.errors.postulante.msg, 'warning')
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

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.imageService.toBase64(file).then((base64) => {

      this.formGroup.controls['img'].setValue(base64);
    });
  }

}
