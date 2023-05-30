import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-gestion-marque',
  templateUrl: './gestion-marque.component.html',
  styleUrls: ['./gestion-marque.component.css']
})
export class GestionMarqueComponent implements OnInit{
  searchTerm:any;
  marque:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
this.http.get<any>("http://localhost:8080/api/auth/getAllMarque").subscribe(res=>{


  this.marque=res
},err=>{console.log(err)})
  }
  performSearch(){
    if(this.searchTerm!=null && this.searchTerm.trim() !== ''){
      this.http.get<any>("http://localhost:8080/api/auth/rechercheparNomMarque/"+this.searchTerm)
      .subscribe(res=>{this.marque=res}
        ,err=>{console.log(err)})
    }
    else{this.http.get<any>("http://localhost:8080/api/auth/getAllMarque").subscribe(res=>{
      this.marque=res
    },err=>{console.log(err)})}

  }
  selectedMarque: any; // variable pour stocker la ligne sélectionnée

onSelect(marque: any) {
  this.selectedMarque = marque;
}
  exportToExcel(){
    const element = document.getElementById('my-table'); // sélectionnez votre tableau HTML par son identifiant
    const worksheet = XLSX.utils.table_to_sheet(element);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'marque.xlsx');
  }
  generateXML(){}
  delete(id:any){
    this.http.delete("http://localhost:8080/api/auth/delete-marque/"+id)
    .subscribe(res=>{
      Swal.fire({
        title: 'Vous etes sur?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui ,supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Supprimé!',
            'Marque Supprimé',
            'success'
          )
          this.ngOnInit();
        }
      })

    },err=>{console.log(err)})

  }
}
