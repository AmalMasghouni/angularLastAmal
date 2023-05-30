import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-famille',
  templateUrl: './gestion-famille.component.html',
  styleUrls: ['./gestion-famille.component.css']
})
export class GestionFamilleComponent implements OnInit {
  famille:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllFamille").subscribe(
      res=>{
        this.famille=res
      },err=>{console.log(err)}
    )
  }

}
