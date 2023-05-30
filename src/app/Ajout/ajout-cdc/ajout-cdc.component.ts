import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-cdc',
  templateUrl: './ajout-cdc.component.html',
  styleUrls: ['./ajout-cdc.component.css']
})
export class AjoutCdcComponent implements OnInit {
  option:any;
  cdc={
  nomCDC:'',
refCDC:'',
indCDC:'',
idSite:'',
creation:'',
signatureOk:'',
refCDCArdia:'',
  }
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/selectSite").subscribe(
      res=>{
        this.option=""
        this.option=res;
      console.log(this.option)},
      err=>console.log(err)
    )
  }
/*ajouter(){
console.log(this.cdc)
 this.http.post("http://localhost:8080/api/auth/ajout-cdc",this.cdc).subscribe(res=>{
    console.log("cdc ajouté",this.cdc);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'CDC Ajouté',
      showConfirmButton: false,
      timer: 4000
    });
    this.route.navigate(['/home-contexte/gestion-cdc'])
},err=>{console.log(err)
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Erreur D\'ajout',

  })})


}*/
test(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'CDC Ajouté',
    showConfirmButton: false,
    timer: 4000
  });
  this.route.navigate(['/home-contexte/gestion-cdc'])
}
}
