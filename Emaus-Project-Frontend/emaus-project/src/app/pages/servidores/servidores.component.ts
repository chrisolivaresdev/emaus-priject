import { Component, OnInit } from '@angular/core';
import { ServidoresService } from 'src/app/services/servidores.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.scss']
})
export class ServidoresComponent implements OnInit {
  visible: boolean = false;
  servidorSelected:any
  servidores:any
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

  constructor( private servidoresService:ServidoresService, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.userActive = this.authService.userActive
    this.getData()
  }

  getData(){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.servidoresService.get().subscribe(resp=>{
          console.log(resp)
          this.servidores = resp.servidor
        })
        break;

      case 'SAMUEL':
        this.servidoresService.getSamuel().subscribe(resp=>{
          console.log(resp)
          this.servidores = resp.servidor
        })
        break;

      case 'SERAFIN':
        this.servidoresService.getSerafin().subscribe(resp=>{
          console.log(resp)
          this.servidores = resp.servidor
        })
        break;

      case 'SEMILLITA':
        this.servidoresService.getSemillita().subscribe(resp=>{
          console.log(resp)
          this.servidores = resp.servidor
        })
        break;

      default:
        break;
    }

  }

  show(servidor:any){
    this.visible = true;
    this.servidorSelected = servidor
  }

  eliminar(){
    switch (this.userActive.role) {
      case 'EMAUS':
        this.servidoresService.delete(this.servidorSelected._id).subscribe(resp => {
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
        this.servidoresService.deleteSemillita(this.servidorSelected._id).subscribe(resp => {
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
        this.servidoresService.deleteSerafin(this.servidorSelected._id).subscribe(resp => {
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
        this.servidoresService.deleteSemillita(this.servidorSelected._id).subscribe(resp => {
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

  editar(servidor:any){
    this.router.navigateByUrl(`/retiros/${servidor.retiro}/servidor/editar/${servidor._id}`)
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
