import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-famille',
  templateUrl: './modifier-famille.component.html',
  styleUrls: ['./modifier-famille.component.css']
})
export class ModifierFamilleComponent implements OnInit{
  id:any;
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
  constructor(private http:HttpClient,private act:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
  ;
  this.http.get<any>("http://localhost:8080/api/auth/getfamilleId/"+this.id)
  .subscribe(
    res=>{this.familleDto=res;
    }
    ,err=>{console.log(err)})

  }
modifier(){
  this.id=this.act.snapshot.paramMap.get('id')
   this.http.put("http://localhost:8080/api/auth/modifier-famille/"+this.id,this.familleDto).
    subscribe(res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Famille modifiée',
        showConfirmButton: false,
        timer: 4000})
  this.route.navigate(['/home-contexte/gestion-famille'])},err=>{console.log(err)})
}
}
