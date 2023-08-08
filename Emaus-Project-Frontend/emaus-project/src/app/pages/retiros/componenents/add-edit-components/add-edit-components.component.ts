import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private retiroService:RetiroService, private ActivateRoute: ActivatedRoute, private fb:FormBuilder) {
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
  }

  regresar(){
    this.router.navigateByUrl('/retiros')
  }


  save(){

    let body = {
      ...this.formGroup.value
    }

    if(this.edit){
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
      }
      )
    } else {
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
    }
  }



}
