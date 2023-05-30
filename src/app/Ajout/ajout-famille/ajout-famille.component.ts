import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-famille',
  templateUrl: './ajout-famille.component.html',
  styleUrls: ['./ajout-famille.component.css']
})
export class AjoutFamilleComponent implements OnInit{
  familleDto={
    nomFamille:'',
    descrAnglais:'',
    phrase:'',
    ordre:'',
    update:'',
    guidedMethFilter:'',
    sparePartsFilter:'',
    idFamilleHynes:'',
    descriptionHaynes:'',
    description:'',

  }
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {}
ajouter(){
  this.http.post("http://localhost:8080/api/auth/ajout-famille",this.familleDto).subscribe(res=>{

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Famille ajoutée',
      showConfirmButton: false,
      timer: 4000
    });
    this.route.navigate(['/home-contexte/gestion-famille'])
},err=>{console.log(err)})
}
}
