import { Component, OnInit } from '@angular/core';
import { CaminantesService } from 'src/app/services/caminantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import jsPDF from 'jspdf';

// no se esta usando
import html2canvas from 'html2canvas';
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
userActive!:User

  constructor( private caminantesService:CaminantesService,private router:Router, private activateRoute:ActivatedRoute, private authService:AuthService) { }

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
        this.caminantesService.getByIdRetiro(id).subscribe(resp => {
          this.caminantes= resp.caminante
        })
        break;

      case 'SAMUEL':
        this.caminantesService.getByIdRetiroSamuel(id).subscribe(resp => {
          this.caminantes= resp.caminante
        })
        break;

      case 'SERAFIN':
        this.caminantesService.getByIdRetiroSerafin(id).subscribe(resp => {
          this.caminantes= resp.caminante
        })
        break;

      case 'SEMILLITA':
        this.caminantesService.getByIdRetiroSemillita(id).subscribe(resp => {
          this.caminantes= resp.caminante
        })
        break;

      default:
        break;
    }

  }

  show(caminante:any){
    this.visible = true;
    this.caminanteSelected = caminante
  }

  eliminar(){
    switch (this.userActive.role) {
      case 'EMAUS':
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
        break;

      case 'SAMUEL':
        this.caminantesService.deleteSamuel(this.caminanteSelected.uid).subscribe(resp => {
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
        break;

      case 'SERAFIN':
        this.caminantesService.deleteSerafin(this.caminanteSelected.uid).subscribe(resp => {
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
        break;

      case 'SEMILLITA':
        this.caminantesService.deleteSemillita(this.caminanteSelected.uid).subscribe(resp => {
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
        break;

      default:
        break;
    }

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

  listado(){
    console.log("log")
  }


  async generatePDF(caminante:any) {
    const doc = new jsPDF();
    if(caminante.img){
      doc.addImage(`${caminante.img}`, 'PNG', 10, 10, 40, 40);
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(18);
      doc.setFont('helvetica','bold')
      doc.text(`Planilla de Inscripción de Retiro de ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 65, 20);
      doc.text(`Caminante de ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 98, 27);
    }else{
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(18);
      doc.setFont('helvetica','bold')
      doc.text(`Planilla de Inscripción de Retiro de ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 45, 20);
      doc.text(`Caminante de ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 76, 27);
    }

    doc.setFontSize(16);
    doc.text(`Nombres:`, 10, 60);
    doc.text(`${caminante.nombre}`,80, 60);
    doc.text(`Cedula:`, 10, 75);
    doc.text(`${caminante.cedula}`,80, 75);
    doc.text(`Fecha de nacimiento:`, 10, 90);
    doc.text(`${caminante.fecha_nac}`,80, 90);
    doc.text(`Estado civil:`, 10, 105);
    doc.text(`${caminante.estado_civ}`,80, 105);
    doc.text(`Dirección:`, 10, 120);
    doc.text(`${caminante.direccion}`,80, 120);
    doc.text(`Teléfono:`, 10, 135);
    doc.text(`${caminante.telefono}`,80, 135);
    doc.text(`Estatura:`, 10, 150);
    doc.text(`${caminante.estatura}`,80, 150);
    doc.text(`Peso:`, 10, 165);
    doc.text(`${caminante.peso}`,80, 165);
    doc.text(`Telefono:`, 10, 180);
    doc.text(`${caminante.telefono}`,80, 180);
    doc.text(`Postulante:`, 10, 195);
    doc.text(`Juan Perez`,80, 195);
    doc.text(`Nombre de un familiar:`, 10, 210);
    doc.text(`${caminante.nombre_fam}`,80, 210);
    doc.text(`Teléfono del familiar:`, 10, 225);
    doc.text(`${caminante.telefono_fam}`,80, 225);
    doc.text(`Antecedentes médicos:`, 10, 240);
    doc.text(`${caminante.antecedentes_med}`,80, 240);
    doc.text(`Tratamiento médico:`, 10, 255);
    doc.text(`${caminante.tratamiento}`,80, 255);
    doc.text(`Alergías:`, 10, 270);
    doc.text(`${caminante.alergia}`,80, 270);
    doc.text(`Notas:`, 10, 285);
    doc.text(`${caminante.notas}`,80, 285);

    doc.autoPrint({variant: 'non-conform'});
    doc.output('dataurlnewwindow')
     doc.save(`caminante-${caminante.nombre}.pdf`);
  }
}
