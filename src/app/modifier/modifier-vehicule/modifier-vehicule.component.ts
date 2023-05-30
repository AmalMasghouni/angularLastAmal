import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {
  constructor(private http:HttpClient,private act:ActivatedRoute,private route:Router){}
  codeVeh:any;
  vehidDto={
    nomVeh:'',
  nomInterne:'',
  marque:'',
  testGlobal:false,
  msgDiag:'',
  grpMarq:'',
  fro:'',
  t:'',
  remarque:'',
  upd:'',
  onlyElec:false,
  avertissElec:false,
  avertissHybrid:false,
  }
marque:any
  ngOnInit(): void {
  this.codeVeh=this.act.snapshot.paramMap.get('id');
  console.log(this.codeVeh);
  this.http.get<any>("http://localhost:8080/api/auth/getVehicule/"+this.codeVeh)
  .subscribe(
    res=>{this.vehidDto=res;
    console.log(this.vehidDto)}
    ,err=>{console.log(err)})
    this.http.get<any>("http://localhost:8080/api/auth/selectMarque").subscribe(
      res=>{this.marque="",
            this.marque=res
            },
      err=>{console.log(err)}
    )
  }

  modifier(){
    this.codeVeh=this.act.snapshot.paramMap.get('id')
   this.http.put("http://localhost:8080/api/auth/modifier-vehicule/"+this.codeVeh,this.vehidDto).
    subscribe(res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Véhicule modifiée',
        showConfirmButton: false,
        timer: 4000})
  this.route.navigate(['/home-contexte/gestion-vehicule'])},err=>{console.log(err)})
  }
modif(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Véhicule modifiée',
    showConfirmButton: false,
    timer: 4000})
this.route.navigate(['/home-contexte/gestion-vehicule'])
}


}
