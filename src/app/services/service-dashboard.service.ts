import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDashboardService {

  constructor() { }
  private _id:any;
  private _idFonction:any;
  getId(): any {
    return this._id;
  }

  // Setter pour id
  setId(value: any) {
    this._id = value;
  }
getIdFonction(): any {
  return this._idFonction;
}
setIdFonction(value: any) {
  this._idFonction = value;
}

}
