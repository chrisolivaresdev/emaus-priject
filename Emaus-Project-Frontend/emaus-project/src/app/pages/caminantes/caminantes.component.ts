import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaminantesService } from 'src/app/services/caminantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-caminantes',
  templateUrl: './caminantes.component.html',
  styleUrls: ['./caminantes.component.scss']
})
export class CaminantesComponent implements OnInit {
  caminantes:any
  visible:any
  caminanteSelected:any
  displayModal: boolean= false
  caminanteView:any
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
  constructor( private caminantesService:CaminantesService, private router:Router) { }

  ngOnInit(): void {

    this.caminantesService.get().subscribe(resp => {
      console.log(resp)
      this.caminantes= resp.caminante
    })
  }

  show(caminante:any){
    this.visible = true;
    this.caminanteSelected = caminante
  }

  eliminar(){
    this.caminantesService.delete(this.caminanteSelected.uid).subscribe(resp => {
      Swal.fire(
        'Bien!',
        'Se ha eliminado correctamente el caminante!!',
        'success'
      )
      this.ngOnInit()
      this.visible = false;
    },(err)=> {

     return Swal.fire('Error', err.error.msg, 'warning')
    })
  }

  ver(caminante :any){
    this.caminanteView = caminante
    this.displayModal = true
  }

  cerrar(){
    this.displayModal = false
    this.caminanteView = undefined
  }

    editar(caminante:any){
      this.router.navigateByUrl(`/retiros/${caminante.retiro}/caminantes/editar/${caminante.uid}`)
    }
  }

