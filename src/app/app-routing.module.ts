import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { ForgotPasswordComponent } from './web/forgot-password/forgot-password.component';
import { ChangerMdpComponent } from './web/changer-mdp/changer-mdp.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GestionUtilisateurComponent } from './dashbord/gestion-utilisateur/gestion-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier/modifier-utilisateur/modifier-utilisateur.component';
import { AjoutUtilisateurComponent } from './Ajout/ajout-utilisateur/ajout-utilisateur.component';
import { GestionContexteDevComponent } from './dashbord/gestion-contexte-dev/gestion-contexte-dev.component';
import { HomeComponent } from './home/home.component';
import { GestionCdcComponent } from './home/gestion-cdc/gestion-cdc.component';
import { GestionVehiculeComponent } from './home/gestion-vehicule/gestion-vehicule.component';
import { GestionMarqueComponent } from './home/gestion-marque/gestion-marque.component';
import { GestionVersionComponent } from './home/gestion-version/gestion-version.component';
import { GestionFamilleComponent } from './home/gestion-famille/gestion-famille.component';
import { GestionDeveloppementComponent } from './dashbord/gestion-developpement/gestion-developpement.component';
import { IntegrationComponent } from './dashbord/integration/integration.component';
import { ModifierCdcComponent } from './modifier/modifier-cdc/modifier-cdc.component';
import { ModifierVersionComponent } from './modifier/modifier-version/modifier-version.component';
import { ModifierVehiculeComponent } from './modifier/modifier-vehicule/modifier-vehicule.component';
import { ModifierMarqueComponent } from './modifier/modifier-marque/modifier-marque.component';
import { ModifierFamilleComponent } from './modifier/modifier-famille/modifier-famille.component';
import { AjoutCdcComponent } from './Ajout/ajout-cdc/ajout-cdc.component';
import { AjoutVersionComponent } from './Ajout/ajout-version/ajout-version.component';
import { AjoutVehiculeComponent } from './Ajout/ajout-vehicule/ajout-vehicule.component';
import { AjoutMarqueComponent } from './Ajout/ajout-marque/ajout-marque.component';
import { AjoutFamilleComponent } from './Ajout/ajout-famille/ajout-famille.component';
import { ConsulterDevComponent } from './consulter/consulter-dev/consulter-dev.component';
import { ModifierMenuComponent } from './modifier/modifier-menu/modifier-menu.component';
import { ModifierDevComponent } from './modifier/modifier-dev/modifier-dev.component';
import { SelectCDCComponent } from './select-cdc/select-cdc.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FonctionModificationComponent } from './fonction-modification/fonction-modification.component';
import { AjoutValidationComponent } from './ajout-validation/ajout-validation.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'mot-de-passe-oublie',component:ForgotPasswordComponent},
  {path:'changer-mot-passe',component:ChangerMdpComponent},
  {path:'dashboard',component:DashbordComponent,children:
   [{path:'gestion-utilisateur',component:GestionUtilisateurComponent},
  {path:'contexte-developpement',component:GestionContexteDevComponent},
  {path:'developpement',component:GestionDeveloppementComponent},
  {path:'integration',component:IntegrationComponent}
]},
/*      Modification        */
   {path:'modifier-utilisateur/:id',component:ModifierUtilisateurComponent},
   {path:'modifier-cdc/:id',component:ModifierCdcComponent},
   {path:'modifier-version/:id',component:ModifierVersionComponent},
   {path:'modifier-vehicule/:id',component:ModifierVehiculeComponent},
   {path:'modifier-marque/:id',component:ModifierMarqueComponent},
   {path:'modifier-famille/:id',component:ModifierFamilleComponent},
   {path:'modifier-menu/:id',component:ModifierMenuComponent},
   {path:'modifier-dev/:id',component:ModifierDevComponent},
   /*     Consulter un dev */
   {path:'consulter-dev/:id',component:ConsultationComponent},
   {path:'modifier-fonction',component:FonctionModificationComponent},
   {path:'modifier-validation',component:AjoutValidationComponent},
   /*      Ajout           */
   {path:'ajout-utilisateur',component:AjoutUtilisateurComponent},
   {path:'ajout-cdc',component:AjoutCdcComponent},
   {path:'ajout-version',component:AjoutVersionComponent},
   {path:'ajout-vehicule',component:AjoutVehiculeComponent},
   {path:'ajout-marque',component:AjoutMarqueComponent},
   {path:'ajout-famille',component:AjoutFamilleComponent},
   {path:'selectionner-cdc',component:SelectCDCComponent},
   /*          Dashboard Gestion Contexte developpement       */
   {path:'home-contexte',component:HomeComponent,children:[
    {path:'gestion-cdc',component:GestionCdcComponent},
    {path:'gestion-vehicule',component:GestionVehiculeComponent},
    {path:'gestion-marque',component:GestionMarqueComponent},
    {path:'gestion-version',component:GestionVersionComponent},
    {path:'gestion-famille',component:GestionFamilleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
