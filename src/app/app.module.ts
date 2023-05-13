import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

import {LoginComponent} from "./components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeadersComponent} from "./components/headers/headers.component";
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { InterventionComponent } from './components/Intervention/Intervention.component';
import { AddInterComponent } from './components/addInter/addInter.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';
import { IntervComponent } from './components/interv/interv.component';
import { OptionComponent } from './components/option/option.component';
import { TacheComponent } from './components/tache/tache.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent, NavbarComponent,
     LoginComponent,
     HeadersComponent,
    ReclamationComponent,
    InterventionComponent,
    AddInterComponent,
    OptionComponent,
    DiagnosticComponent,
    IntervComponent,
    TacheComponent
  ],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      ReactiveFormsModule, FormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
