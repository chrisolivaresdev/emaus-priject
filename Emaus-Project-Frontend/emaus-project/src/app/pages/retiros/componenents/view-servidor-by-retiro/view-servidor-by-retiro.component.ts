import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServidoresService } from '../../../../services/servidores.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-view-servidor-by-retiro',
  templateUrl: './view-servidor-by-retiro.component.html',
  styleUrls: ['./view-servidor-by-retiro.component.scss']
})
export class ViewServidorByRetiroComponent implements OnInit {

  servidores:any
  visible:any
  servidorelected:any
  idRetiro:any
  displayModal: boolean= false
  servidorView:any
  cols = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'cedula', header: 'Cedula' },
    { field: 'estatura', header: 'Estatura' },
    { field: 'peso', header: 'Peso' },
    { field: 'alergia', header: 'Alergia' },
    { field: 'tratamiento', header: 'Tratamiento' },
    { field: 'Acciones', header: 'Acciones' }
];

detailStruct= [
  {label:'Nombre', field: 'nombre'},
  {label:'Cedula', field: 'cedula'},
  {label:'Fecha de nacimiento', field: 'fecha_nac'},
  {label:'Estado civil', field: 'estado_civ'},
  {label:'Direccion', field: 'direccion'},
  {label:'Telefono', field: 'telefono'},
  {label:'Estatura', field: 'estatura'},
  {label:'Peso', field: 'peso'},
  {label:'Nombre del familiar', field: 'nombre_fam'},
  {label:'Telefono del familiar', field: 'telefono_fam'},
  {label:'Antecedentes medicos', field: 'antecedentes_med'},
  {label:'Tratamiento', field: 'tratamiento'},
  {label:'Alergia', field: 'alergia'},
  {label:'Aporte economico', field: 'aporte_eco'},
  {label:'Notas', field: 'notas'},
]
userActive!:User

constructor( private servidoresService:ServidoresService,private router:Router, private activateRoute:ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.userActive = this.authService.userActive
    this.activateRoute.params.subscribe({
      next: ({ id }) => {
        this.idRetiro = id
        this.getData(this.idRetiro);
      },
  })
}

  getData(id :any){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.servidoresService.getByIdRetiro(id).subscribe(resp => {
          this.servidores= resp.servidor
        })
        break;
      case 'SAMUEL':
        this.servidoresService.getByIdRetiroSamuel(id).subscribe(resp => {
          this.servidores= resp.servidor
        })
        break;

      case 'SERAFIN':
        this.servidoresService.getByIdRetiroSerafin(id).subscribe(resp => {
          this.servidores= resp.servidor
        })
        break;

      case 'SEMILLITA':
        this.servidoresService.getByIdRetiroSemillita(id).subscribe(resp => {
          this.servidores= resp.servidor
        })
        break;

      default:
        break;
    }

  }

  show(servidor:any){
    this.visible = true;
    this.servidorelected = servidor
  }

  eliminar(){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.servidoresService.delete(this.servidorelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el servidor!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {
         return Swal.fire('Error', err.error.msg, 'warning')
        })
        break;

      case 'SAMUEL':
        this.servidoresService.deleteSamuel(this.servidorelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el servidor!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {
         return Swal.fire('Error', err.error.msg, 'warning')
        })
        break;

      case 'SERAFIN':
        this.servidoresService.deleteSerafin(this.servidorelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el servidor!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {
         return Swal.fire('Error', err.error.msg, 'warning')
        })
        break;

      case 'SEMILLITA':
        this.servidoresService.deleteSemillita(this.servidorelected._id).subscribe(resp => {
          Swal.fire(
            'Bien!',
            'Se ha eliminado correctamente el servidor!!',
            'success'
          )
          this.ngOnInit()
          this.visible = false;
        },(err)=> {
         return Swal.fire('Error', err.error.msg, 'warning')
        })
        break;

      default:
        break;
    }

  }

  add(){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor/agregar`)
  }

  editar(servidor:any){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/servidor/editar/${servidor._id}`)
  }

  cerrar(){
    this.displayModal = false
    this.servidorView = undefined
  }

  ver(caminante :any){
    this.servidorView = caminante
    this.displayModal = true
  }


}
