import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDashboardService } from '../services/service-dashboard.service';

@Component({
  selector: 'app-fonction-modification',
  templateUrl: './fonction-modification.component.html',
  styleUrls: ['./fonction-modification.component.css']
})
export class FonctionModificationComponent implements OnInit {
  fonction:any
  f:any
  constructor(private http:HttpClient,private router:Router,private _dataService:ServiceDashboardService){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllFonctionCDC").subscribe(
      res=>{this.fonction=res},
      err=>{console.log(err)}
    )
  }
  select(id:number){
    this.http.put(`http://localhost:8080/api/auth/modifierFonction?idDev=${this._dataService.getIdFonction()}&idFonction=${id}`,{})
  .subscribe(
    res => {
      this.fonction = this.fonction.filter((f: { id: number; }) => f.id !== id);

    },
    err => {
      console.log(err);
    }
  );
    console.log(id);


  }
}
