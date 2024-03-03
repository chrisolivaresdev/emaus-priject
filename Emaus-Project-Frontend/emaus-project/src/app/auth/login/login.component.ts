import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formSubmitted = false;
  loginForm = this.fb.group({
    email:[ 'emaus@gmail.com' ,Validators.required],
    password:['emaus' ,Validators.required]
  })

  constructor( private router:Router, private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){

  this.authService.Login(this.loginForm.value).subscribe(resp => {
    Swal.fire(
      'Felicidades!',
      'Has iniciado sesión correctamente',
      'success'
    )
    return setTimeout(()=>{
      this.router.navigateByUrl('/');
    }, 500)
  },(err)=> {
    if(err.error.errors?.email){
     return Swal.fire('Error', err.error.errors.email.msg, 'warning')
    }
    if(err.error.errors?.password){
      return Swal.fire('Error', err.error.errors.password.msg, 'warning')
    }
   return Swal.fire('Error', err.error.msg, 'warning')
  } )
  }

}
