import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-marque',
  templateUrl: './modifier-marque.component.html',
  styleUrls: ['./modifier-marque.component.css']
})
export class ModifierMarqueComponent  implements OnInit {
  id:any
  MarqueDto={
    nommar:'',
    profil:'',
    geo:'',
    cible:''
  }
  constructor(private http:HttpClient,private act:ActivatedRoute,private Route:Router){}
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.http.get<any>("http://localhost:8080/api/auth/getMarque/"+this.id)
  .subscribe(
    res=>{this.MarqueDto=res;
    }
    ,err=>{console.log(err)})
  }
  Modifier(){
   {
      this.id=this.act.snapshot.paramMap.get('id')
     this.http.put("http://localhost:8080/api/auth/modifier-marque/"+this.id,this.MarqueDto).
      subscribe(res=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Marque modifiée',
          showConfirmButton: false,
          timer: 4000})
    this.Route.navigate(['/home-contexte/gestion-marque'])},err=>{console.log(err)})
    }
  }
}
