import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {
  option:any;
  id:any
  registerDto={
    firstName:'',
    lastName:'',
    email:'',
    employeecode:'',
    responsableequipe:'',
    role:'',
    site:''
  }
  constructor(private fb: FormBuilder, private http: HttpClient,private Route:Router,private act:ActivatedRoute ){}


  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/selectSite").subscribe(
      res=>{
        this.option=""
        this.option=res;
      console.log(this.option)},
      err=>console.log(err)
    )
    this.id=this.act.snapshot.paramMap.get('id');
  console.log(this.id);
  this.http.get<any>("http://localhost:8080/api/auth/getbyid/"+this.id)
  .subscribe(
    res=>{this.registerDto=res[0];
    console.log(this.registerDto)}
    ,err=>{console.log(err)})


  }
 modifier(){

    this.id = this.act.snapshot.paramMap.get('id');

  this.http.put('http://localhost:8080/api/auth/modifier-utilisateur/'+this.id ,this.registerDto).subscribe(
    response => {
    Swal.fire({
      title: 'Succés de Modification',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })


    this.Route.navigate(['/dashboard/gestion-utilisateur']);
  },

    error=> {console.error('Error registering user', error);}

  );
  }
}
