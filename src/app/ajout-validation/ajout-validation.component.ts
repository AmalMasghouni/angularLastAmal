import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-validation',
  templateUrl: './ajout-validation.component.html',
  styleUrls: ['./ajout-validation.component.css']
})
export class AjoutValidationComponent implements OnInit{
  ver:any
  version={
    DateValid:'',
    typeValid:'',
    EtatValid:'',
    idVer:''
  }
  validationId:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/validationversion").subscribe(
      res=>{this.ver=res},
      err=>{console.log(err);}
    )
  }
  ajouter(){
    this.http.post("http://localhost:8080/api/auth/ajout-validation",this.version).subscribe(
      res=>{this.validationId = res},
      err=>{console.log(err)}
    )
  }
}
