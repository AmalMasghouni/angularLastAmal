import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit {
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {}
  MarqueDto={
    nommar:'',
    profil:'',
    geo:'',
    cible:''
  }
ajouter(){
this.http.post("http://localhost:8080/api/auth/ajout-marque",this.MarqueDto)
.subscribe(res=>{
Swal.fire({
  title: '"Marque Ajoutée',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
this.route.navigate(['/home-contexte/gestion-marque'])
},err=>{console.log(err)})
}

}
