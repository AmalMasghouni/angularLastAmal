import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-cdc',
  templateUrl: './modifier-cdc.component.html',
  styleUrls: ['./modifier-cdc.component.css']
})
export class ModifierCdcComponent implements OnInit {
  option:any
  id:any
  cdc={
    nomCDC:'',
  refCDC:'',
  indCDC:'',
 idSite:'',
  creation:'',
  signatureOk:'',
  refCDCArdia:'',
    }
  constructor(private http:HttpClient,private act:ActivatedRoute,private Route:Router){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/selectSite").subscribe(
      res=>{
        this.option="",
        this.option=res;},
      err=>console.log(err)
    )
    this.id=this.act.snapshot.paramMap.get('id');
  console.log(this.id);
  this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSiteById/"+this.id)
  .subscribe(
    res=>{this.cdc=res[0];
    console.log(this.cdc)}
    ,err=>{console.log(err)})


  }
modifier(){
  this.id = this.act.snapshot.paramMap.get('id');
console.log(this.cdc);
  this.http.put('http://localhost:8080/api/auth/modifier-cdc/'+this.id ,this.cdc).subscribe(
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
   this.Route.navigate(['/home-contexte/gestion-cdc']);
  },

    error=> {console.error( error);}

  );
}

}
