import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  utlisateur:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getutliBysite").subscribe(
      res=>(this.utlisateur=res),
      err=>{console.log(err)}
    )
  }
delete(id:any){
  Swal.fire({
    title: 'Vous etes sur?',
    text: "Vous ne pourrez plus la recupérer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.delete("http://localhost:8080/api/auth/delete-utilisateur/"+id).subscribe(
    res=>{ Swal.fire(
      'Deleted!',
      'Votre utilisateur est supprimé.',
      'success'
    )
          this.ngOnInit();
          },
            err=>{console.log(err)}
)

    }
  })

}
}
