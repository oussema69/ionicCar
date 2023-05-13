import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import {LoginComponent} from "./components/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { InterventionComponent } from './components/Intervention/Intervention.component';
import { AddInterComponent } from './components/addInter/addInter.component';
import { IntervComponent } from './components/interv/interv.component';
import { OptionComponent } from './components/option/option.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';
import { TacheComponent } from './components/tache/tache.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'home', component:HomeComponent, children:[
      {path:'rec',component:ReclamationComponent},
      {path:'inter',component:InterventionComponent},
      {path:'interadd/:id',component:AddInterComponent},
      {path:'interv/:id',component:IntervComponent},
      {path:'option/:id',component:OptionComponent},
      {path:'diag/:id',component:DiagnosticComponent},
      {path:'tache/:id',component:TacheComponent},





    ]
  },
  {path:'login',component:LoginComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
