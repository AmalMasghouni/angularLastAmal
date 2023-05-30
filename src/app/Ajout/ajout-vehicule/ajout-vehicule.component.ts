import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
})
export class AjoutVehiculeComponent implements OnInit {
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/selectMarque").subscribe(
      res=>{this.marque="",
            this.marque=res
            },
      err=>{console.log(err)}
    )
  }
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
  selectedMarque= '';
  ajouter(){
    this.http.post("http://localhost:8080/api/auth/ajout-vehicule",this.vehidDto).subscribe(res=>{
      console.log(this.vehidDto);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vehicule ajoutée',
        showConfirmButton: false,
        timer: 4000
      });
      this.route.navigate(['/home-contexte/gestion-vehicule'])
  },err=>{console.log(err)})

  }
  test(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Vehicule ajoutée',
      showConfirmButton: false,
      timer: 4000
    });
    this.route.navigate(['/home-contexte/gestion-vehicule'])
  }
}
