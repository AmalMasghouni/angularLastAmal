import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servive/login-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private _ser:LoginServiceService,private router:Router,private http:HttpClient){}




  loginForm = this.fb.group({
   email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@actia-engineering\.tn$/)]],
     password: ['', [
       Validators.required,
       Validators.minLength(8)
     ]]
   });
   ngOnInit(): void { }
   onSubmit(){


     const formData = this.loginForm.value;

     if (formData.email) {
       this._ser.checkPasswordChanged(formData.email).subscribe(
         isFirstLogin => {
           if (!isFirstLogin) {
             this.http.post('http://localhost:8080/api/auth/login', formData).subscribe(
               response => {
                 console.log('Bienvenue,', response);
                 Swal.fire({
                   position: 'top-end',
                   icon: 'success',
                   title: 'Logged',
                   showConfirmButton: false,
                   timer: 4000
                 });
                 this.router.navigate(['/dashboard']);
               },
               error => {
                 console.log('Erreur de connexion:', error);
                 Swal.fire({
                   icon: 'error',
                   title: 'Oops...',
                   text: 'Veuillez vérifier vos coordonnées',
                 });
               }
             );
           } else {
             this.router.navigate(['/changer-mdp']);
           }
         },
         error => {
           console.log('Erreur lors de la vérification du mot de passe:', error);
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Veuillez vérifier vos données',

          });
          this.router.navigate(['/login']);
         }
       );
     }
    }}
