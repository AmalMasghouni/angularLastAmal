import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-cdc',
  templateUrl: './gestion-cdc.component.html',
  styleUrls: ['./gestion-cdc.component.css']
})
export class GestionCdcComponent implements OnInit {
  cdc:any;
  idCDC:any
  searchTerm:any
  version:any
  selectedVersion:any
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSite").subscribe(
      res=>{
        console.log(this.cdc);
        this.cdc=res
      },err=>{console.log(err)}
    )
    this.http.get<any>("http://localhost:8080/api/auth/selectVersion").subscribe(
  res=>{this.version="",
        this.version=res},
  err=>{console.log(err)}
)
  }
  onSearch(){
    if(this.searchTerm!=null && this.searchTerm.trim() !== ''){
    this.http.get<any>("http://localhost:8080/api/auth/rechercheparRefCdc/"+this.searchTerm).subscribe(
     res=>{this.cdc=res} ,
     err=>{console.log(err)})}
     else{this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSite").subscribe(
      res=>{
        console.log(this.cdc);
        this.cdc=res
      },err=>{console.log(err)}
    )}
  }
  exportToExcel(){}
  delete(idCDC:any){
    this.http.delete("http://localhost:8080/api/auth/delete-cdc/"+idCDC).subscribe(
            res=>{console.log("cdc supprime"),
          this.ngOnInit();
          },
            err=>{console.log(err)}
)
  }
  generateXML() {}
  onVersionSelected(){
  if (this.selectedVersion) {
    this.http.get<any>(`http://localhost:8080/api/auth/rechercheCDCparVersion?version=${this.selectedVersion}`).subscribe(
      res => {
        this.cdc= res;
      },
      err => {
        console.log(err);
      }
    );
  } else {

    this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSite").subscribe(
      res=>{
        this.cdc=res
      },err=>{console.log(err)}
    )
  }
 }
}
