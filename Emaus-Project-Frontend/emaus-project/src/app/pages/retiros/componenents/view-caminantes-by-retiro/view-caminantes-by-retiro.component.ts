import { Component, OnInit } from '@angular/core';
import { CaminantesService } from 'src/app/services/caminantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-caminantes-by-retiro',
  templateUrl: './view-caminantes-by-retiro.component.html',
  styleUrls: ['./view-caminantes-by-retiro.component.scss']
})
export class ViewCaminantesByRetiroComponent implements OnInit {
  caminantes:any
  visible:any
  caminanteSelected:any
  idRetiro:any
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
  constructor( private caminantesService:CaminantesService,private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe({
      next: ({ id }) => {
        this.idRetiro = id
        this.getData(this.idRetiro);
      },
  })
}

  getData(id :any){
    this.caminantesService.getByIdRetiro(id ).subscribe(resp => {
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

  add(){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes/agregar`)
  }

  editar(caminante:any){
    this.router.navigateByUrl(`/retiros/${this.idRetiro}/caminantes/editar/${caminante.uid}`)
  }

  cerrar(){
    this.displayModal = false
    this.caminanteView = undefined
  }

  ver(caminante :any){
    this.caminanteView = caminante
    this.displayModal = true
  }

}
