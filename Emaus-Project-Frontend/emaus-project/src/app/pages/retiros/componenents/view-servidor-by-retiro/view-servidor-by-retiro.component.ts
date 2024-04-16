import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServidoresService } from '../../../../services/servidores.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user.interface';
import jsPDF from 'jspdf';

// no se esta usando
import html2canvas from 'html2canvas';
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

  ver(servidor :any){
    this.servidorView = servidor
    this.displayModal = true
  }

  async generatePDF(servidor:any) {
    const doc = new jsPDF();

    doc.addImage(`${servidor.img}`, 'PNG', 10, 10, 40, 40);
    doc.setTextColor(60, 60, 60)
    doc.setFontSize(18);
    doc.setFont('helvetica','bold')
    doc.text(`Planilla de Inscripción de Retiro de ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 65, 20);
    doc.text(`servidor ${this.userActive.role.charAt(0).toUpperCase() + this.userActive.role.slice(1).toLowerCase()}`, 98, 27);
    doc.setFontSize(16);
    doc.text(`Nombres:`, 10, 60);
    doc.text(`${servidor.nombre}`,80, 60);
    doc.text(`Cedula:`, 10, 75);
    doc.text(`${servidor.cedula}`,80, 75);
    doc.text(`Fecha de nacimiento:`, 10, 90);
    doc.text(`${servidor.fecha_nac}`,80, 90);
    doc.text(`Estado civil:`, 10, 105);
    doc.text(`${servidor.estado_civ}`,80, 105);
    doc.text(`Dirección:`, 10, 120);
    doc.text(`${servidor.direccion}`,80, 120);
    doc.text(`Teléfono:`, 10, 135);
    doc.text(`${servidor.telefono}`,80, 135);
    doc.text(`Estatura:`, 10, 150);
    doc.text(`${servidor.estatura}`,80, 150);
    doc.text(`Peso:`, 10, 165);
    doc.text(`${servidor.peso}`,80, 165);
    doc.text(`Telefono:`, 10, 180);
    doc.text(`${servidor.telefono}`,80, 180);
    doc.text(`Postulante:`, 10, 195);
    doc.text(`Juan Perez`,80, 195);
    doc.text(`Nombre de un familiar:`, 10, 210);
    doc.text(`${servidor.nombre_fam}`,80, 210);
    doc.text(`Teléfono del familiar:`, 10, 225);
    doc.text(`${servidor.telefono_fam}`,80, 225);
    doc.text(`Antecedentes médicos:`, 10, 240);
    doc.text(`${servidor.antecedentes_med}`,80, 240);
    doc.text(`Tratamiento médico:`, 10, 255);
    doc.text(`${servidor.tratamiento}`,80, 255);
    doc.text(`Alergías:`, 10, 270);
    doc.text(`${servidor.alergia}`,80, 270);
    doc.text(`Notas:`, 10, 285);
    doc.text(`${servidor.notas}`,80, 285);

    doc.autoPrint({variant: 'non-conform'});
    doc.output('dataurlnewwindow')
     doc.save(`servidor-${servidor.nombre}.pdf`);
  }

}
