import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceDashboardService } from '../services/service-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-cdc',
  templateUrl: './select-cdc.component.html',
  styleUrls: ['./select-cdc.component.css']
})
export class SelectCDCComponent implements OnInit{
  cdc:any;
  id:any
  constructor(private http:HttpClient,private _dataService:ServiceDashboardService,private router:Router){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSite").subscribe(
      res=>{
        console.log(this.cdc);
        this.cdc=res
      },err=>{console.log(err)}
    )
  }
 /* selectionnerCDC(idCDC: number) {
    if (idCDC) {
      this.http.put("http://localhost:8080/api/auth/modiiferDevByCDC/" + this._dataService.getId() + "/" + idCDC, {})
        .subscribe(
          res => {
            this.router.navigate(['/modifier-dev', this._dataService.getId()]);
          },
          err => {
            console.log(err);
          }
        );
    } else {
      console.log("idCDC n'est pas défini ou n'a pas de valeur.");
    }
  }*/
  selectionnerCDC(idCDC: number) {

    this.http.put(`http://localhost:8080/api/auth/modiiferDevByCDC?idDev=${this._dataService.getId()}&idCDC=${idCDC}`,{})
      .subscribe(
        res => {
          this.router.navigate(['/modifier-dev', this._dataService.getId()]);
        },
        err => {
          console.log(err);
        }
      );
  }


}
