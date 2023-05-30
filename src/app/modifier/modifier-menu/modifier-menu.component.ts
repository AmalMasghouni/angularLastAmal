import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-menu',
  templateUrl: './modifier-menu.component.html',
  styleUrls: ['./modifier-menu.component.css']
})
export class ModifierMenuComponent implements OnInit{
  id:any
  menu:any
  constructor(private http:HttpClient,private act:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.http.get<any>("http://localhost:8080/api/auth/getMenuByid/"+this.id)
  .subscribe(
    res=>{this.menu=res;
    }
    ,err=>{console.log(err)})
   }

  

}
