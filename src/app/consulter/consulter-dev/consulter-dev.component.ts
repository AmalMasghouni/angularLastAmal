import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDashboardService } from 'src/app/services/service-dashboard.service';

@Component({
  selector: 'app-consulter-dev',
  templateUrl: './consulter-dev.component.html',
  styleUrls: ['./consulter-dev.component.css']
})
export class ConsulterDevComponent implements OnInit{
  id:any
  dev:any
 /* {
    cdc:'',
    refCdc: '',
    nomDev: '',
    menu: '',
    n: '',
    vehidList:'',
    utilisateur: '',
    bug:'',
    ecu: '',
    maj:'',
    idSite: '',
    nomDll:'',
    typeDev: '',
    famille: '',
    etatDev:'',
}*/
  constructor(private http:HttpClient,private act:ActivatedRoute,
    private router :Router){}
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.http.get<any>("http://localhost:8080/api/auth/getDevById/"+this.id).subscribe(
      res=>{this.dev=res[0]},
      err=>{console.log(err)}
    )

  }



}

