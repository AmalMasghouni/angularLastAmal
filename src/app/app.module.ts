import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { LoginComponent } from './web/login/login.component';
import { ForgotPasswordComponent } from './web/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import{HttpClientModule}from '@angular/common/http';
import { ChangerMdpComponent } from './web/changer-mdp/changer-mdp.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GestionUtilisateurComponent } from './dashbord/gestion-utilisateur/gestion-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier/modifier-utilisateur/modifier-utilisateur.component';
import { AjoutUtilisateurComponent } from './Ajout/ajout-utilisateur/ajout-utilisateur.component';
import { GestionContexteDevComponent } from './dashbord/gestion-contexte-dev/gestion-contexte-dev.component';
import { HomeComponent } from './home/home.component';
import { GestionCdcComponent } from './home/gestion-cdc/gestion-cdc.component';
import { GestionVehiculeComponent } from './home/gestion-vehicule/gestion-vehicule.component';
import { GestionFamilleComponent } from './home/gestion-famille/gestion-famille.component';
import { GestionVersionComponent } from './home/gestion-version/gestion-version.component';
import { GestionMarqueComponent } from './home/gestion-marque/gestion-marque.component';
import { GestionDeveloppementComponent } from './dashbord/gestion-developpement/gestion-developpement.component';
import { IntegrationComponent } from './dashbord/integration/integration.component';
import { AjoutCdcComponent } from './Ajout/ajout-cdc/ajout-cdc.component';
import { AjoutVehiculeComponent } from './Ajout/ajout-vehicule/ajout-vehicule.component';
import { AjoutMarqueComponent } from './Ajout/ajout-marque/ajout-marque.component';
import { AjoutFamilleComponent } from './Ajout/ajout-famille/ajout-famille.component';
import { AjoutVersionComponent } from './Ajout/ajout-version/ajout-version.component';
import { ModifierCdcComponent } from './modifier/modifier-cdc/modifier-cdc.component';
import { ModifierVehiculeComponent } from './modifier/modifier-vehicule/modifier-vehicule.component';
import { ModifierFamilleComponent } from './modifier/modifier-famille/modifier-famille.component';
import { ModifierMarqueComponent } from './modifier/modifier-marque/modifier-marque.component';
import { ModifierVersionComponent } from './modifier/modifier-version/modifier-version.component';
import { ConsulterDevComponent } from './consulter/consulter-dev/consulter-dev.component';
import { ModifierMenuComponent } from './modifier/modifier-menu/modifier-menu.component';
import { ModifierDevComponent } from './modifier/modifier-dev/modifier-dev.component';
import { SelectCDCComponent } from './select-cdc/select-cdc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationComponent } from './consultation/consultation.component';
import { FonctionModificationComponent } from './fonction-modification/fonction-modification.component';
import { AjoutValidationComponent } from './ajout-validation/ajout-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangerMdpComponent,
    DashbordComponent,
    GestionUtilisateurComponent,
    ModifierUtilisateurComponent,
    AjoutUtilisateurComponent,
    GestionContexteDevComponent,
    HomeComponent,
    GestionCdcComponent,
    GestionVehiculeComponent,
    GestionFamilleComponent,
    GestionVersionComponent,
    GestionMarqueComponent,
    GestionDeveloppementComponent,
    IntegrationComponent,
    AjoutCdcComponent,
    AjoutVehiculeComponent,
    AjoutMarqueComponent,
    AjoutFamilleComponent,
    AjoutVersionComponent,
    ModifierCdcComponent,
    ModifierVehiculeComponent,
    ModifierFamilleComponent,
    ModifierMarqueComponent,
    ModifierVersionComponent,
    ConsulterDevComponent,
    ModifierMenuComponent,
    ModifierDevComponent,
    SelectCDCComponent,
    ConsultationComponent,
    FonctionModificationComponent,
    AjoutValidationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
