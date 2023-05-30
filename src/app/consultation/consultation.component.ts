import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDashboardService } from '../services/service-dashboard.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  id:any
  dev:any;
  constructor(private http:HttpClient,private act:ActivatedRoute,private _dataService:ServiceDashboardService){}
  ngOnInit(): void {
   this.id=this.act.snapshot.paramMap.get('id');
    this.http.get<any>("http://localhost:8080/api/auth/getDevById/"+this.id).subscribe(
      res=>{this.dev=res[0]},
      err=>{console.log(err)}
    )
    this._dataService.setId(this.id);
    this._dataService.setIdFonction(this.id);
    console.log("service", this._dataService.setIdFonction(this.id));
  }
}
