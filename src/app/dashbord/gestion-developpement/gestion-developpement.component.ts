import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-gestion-developpement',
  templateUrl: './gestion-developpement.component.html',
  styleUrls: ['./gestion-developpement.component.css']
})
export class GestionDeveloppementComponent implements OnInit {
  devl:any;
  utilisateur :any
  marque:any
  modele:any
  version:any
  site:any
 refCdc:any
 selectedMarque= '';
 selectedModele = '';
 selectedVersion= '';
 selectedSite= '';
 selectedUtilisateur = '';
 selectedRefCdc='';
 options:any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
      Response=>{this.devl=Response;},
      err=>{console.log(err)}
    )
    this.initialiserSelect();
   }
   initialiserSelect(){
    this.http.get<any>("http://localhost:8080/api/auth/selectMarque").subscribe(
      res=>{this.marque="",
            this.marque=res
            },
      err=>{console.log(err)}
    )

    this.http.get<any>("http://localhost:8080/api/auth/selectModele").subscribe(
      res=>{this.modele="",
            this.modele=res },
      err=>{console.log(err)}
    )

this.http.get<any>("http://localhost:8080/api/auth/selectVersion").subscribe(
  res=>{this.version="",
        this.version=res },
  err=>{console.log(err)}
)
this.http.get<any>("http://localhost:8080/api/auth/selectSite").subscribe(
  res=>{this.site="",
        this.site=res },
  err=>{console.log(err)}
)
this.http.get<any>("http://localhost:8080/api/auth/selectUtilisateur").subscribe(
  res=>{this.utilisateur="",
        this.utilisateur=res },
  err=>{console.log(err)}
)
this.http.get<any>("http://localhost:8080/api/auth/selectCdc").subscribe(
  res=>{this.refCdc="",
        this.refCdc=res },
  err=>{console.log(err)}
)
   }
  onMarqueSelected() {
    console.log("methodeape",this.selectedMarque);
    if (this.selectedMarque) {
      this.http.get<any>("http://localhost:8080/api/auth/selectModeleByMarque/" + this.selectedMarque).subscribe(
        res => {
          this.modele= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.http.get<any>("http://localhost:8080/api/auth/selectModele").subscribe(
        res=>{this.modele="",
              this.modele=res },
        err=>{console.log(err)}
      )
    }


  }

filtrer(){
  this.options.push(this.selectedModele, this.selectedMarque,this.selectedVersion,this.selectedSite,this.selectedUtilisateur,this.selectedRefCdc);
  const filters = this.options.reduce((obj, item, index) => {
    const key = ['modele', 'marque', 'version', 'site', 'utilisateur', 'cdc'][index];
    obj[key] = item;
    return obj;
  }, {});
  console.log(filters);
  /*this.http.get<any>(`http://localhost:8080/api/auth/filtrer`, { params: filters }).subscribe(
    res=>{this.devl=res},
    err=>{console.log(err)}
  )*/
  }
  searchTermDll:any
  SearchDll(){
      if(this.searchTermDll!=null && this.searchTermDll.trim() !== ''){
        this.http.get<any>("http://localhost:8080/api/auth/cherhcherparDll/"+this.searchTermDll)
        .subscribe(res=>{this.devl=res}
          ,err=>{console.log(err)})
      }
      else{this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(res=>{
        this.devl=res
      },err=>{console.log(err)})}

    }
    searchTermNDev:any
  SearchNdev(){
    if(this.searchTermNDev!=null && this.searchTermNDev.trim() !== ''){
      this.http.get<any>("http://localhost:8080/api/auth/getDevById/"+this.searchTermNDev)
      .subscribe(res=>{this.devl=res}
        ,err=>{console.log(err)})
    }
    else{this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(res=>{
      this.devl=res
    },err=>{console.log(err)})}
  }
  /*onVersionSelected(){
    if (this.selectedVersion) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparVersion?version=${this.selectedVersion}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }
   onSiteSelected(){
    if (this.selectedSite) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparNomsite?site=${this.selectedSite}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }
   onUtilisateurSelected(){
    if (this.selectedUtilisateur) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparutilisateur?utilisateur=${this.selectedUtilisateur}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }
   onRefCDCSelected(){
    if (this.selectedRefCdc) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparrefCDC?refCDC=${this.selectedRefCdc}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }
   onMarqueFiltre(){
    if (this.selectedMarque) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparMarque?marque=${this.selectedMarque}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }
   onModeleSelected(){
    if (this.selectedModele) {
      this.http.get<any>(`http://localhost:8080/api/auth/rechercheDEVparmodele?modele=${this.selectedModele}`).subscribe(
        res => {
          this.devl= res;
        },
        err => {
          console.log(err);
        }
      );
    } else {

      this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
        res=>{
          this.devl=res
        },err=>{console.log(err)}
      )
    }
   }*/
   onVersionSelected() {
    this.updateFilteredData();
  }

  onSiteSelected() {
    this.updateFilteredData();
  }

  onUtilisateurSelected() {
    this.updateFilteredData();
  }

  onRefCDCSelected() {
    this.updateFilteredData();
  }

  onMarqueFiltre() {
    this.updateFilteredData();
  }

  onModeleSelected() {
    this.updateFilteredData();
  }

  updateFilteredData() {

   let url = "http://localhost:8080/api/auth/getAllDev";

    if (this.selectedVersion || this.selectedSite || this.selectedUtilisateur || this.selectedRefCdc || this.selectedMarque || this.selectedModele) {
     url = "http://localhost:8080/api/auth/filterDev?";

      if (this.selectedVersion) {
        url += `version=${this.selectedVersion}&`;
      }

      if (this.selectedSite) {
        url += `site=${this.selectedSite}&`;
      }

      if (this.selectedUtilisateur) {
        url += `utilisateur=${this.selectedUtilisateur}&`;
      }

      if (this.selectedRefCdc) {
        url += `refCDC=${this.selectedRefCdc}&`;
      }

      if (this.selectedMarque) {
        url += `marque=${this.selectedMarque}&`;
      }

      if (this.selectedModele) {
        const modele = this.selectedModele;
        const match = modele.match(/^(.*?)\[(.*?)\]$/);
        if (match) {
          const nomVeh = match[1];
          const nomInterne = match[2];


          url += `nomVeh=${nomVeh}&nomInterne=${nomInterne}`;
        }
      }

      // Supprime le dernier '&' de l'URL
      url = url.slice(0, -1);
    }

    this.http.get<any>(url).subscribe(
      res => {
        this.devl = res;

        this.selectedVersion ='';
        this.selectedSite ='';
        this.selectedUtilisateur = '';
        this.selectedRefCdc = '';
        this.selectedMarque = '';
        this.selectedModele = '';
      },
      err => {
        console.log(err);
      }
    );
  }
  exportToExcel(){
    const element = document.getElementById('my-table'); // sélectionnez votre tableau HTML par son identifiant
    const worksheet = XLSX.utils.table_to_sheet(element);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'dev.xlsx');
  }
}
